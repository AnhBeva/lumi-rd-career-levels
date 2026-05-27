// Application State Management
const appState = {
  activeTab: 'tab-profile',      // tab-profile, tab-roles, tab-compare, tab-checklist
  activeRoleId: 'thiet-ke',       // active role ID inside roles explorer
  activeRoleInnerSec: 'overview', // active sub-section in roles explorer: overview, ladder, matrix, growth
  matrixFilterMode: 'all',       // all, single (inside role explorer matrix)
  selectedMatrixLevel: '',       // single level view in matrix
  
  // Checklist states
  checklistRoleId: 'thiet-ke',
  checklistLevelId: '',          // dynamically set based on chosen role's levels
  checklistAnswers: {},          // key: question index, value: 'none', 'learning', 'stable', 'excel'
  
  // Compare states
  compareType: 'roles-compare',  // roles-compare, dimensions-compare
  compareSelectedRoles: [],      // array of role IDs (up to 3)
  compareLevel: 'Junior',
  compareSingleRole: 'software',
  
  // Search state
  searchQuery: ''
};

// Toast notification helper
function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Basic Markdown inline formatter for text formatting
function formatInlineHtml(text) {
  if (!text) return "";
  return text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper to create search text snippet
function getSnippet(htmlText, query) {
  // Convert HTML tags to plain text for snippet search
  const text = htmlText.replace(/<[^>]*>/g, ' ');
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text.substring(0, 100) + '...';
  
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + query.length + 60);
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  return snippet;
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSearch();
  
  // Render initial tab content
  renderProfileTab();
  renderRolesTab();
  renderCompareTab();
  renderChecklistTab();
});

// Theme management (Light/Dark)
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  
  const setDark = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      localStorage.setItem('lumi_theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
      localStorage.setItem('lumi_theme', 'light');
    }
  };

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('lumi_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDark(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

  themeToggle.addEventListener('click', () => {
    setDark(!document.body.classList.contains('dark'));
  });
}

// Navigation Handling
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update state
  appState.activeTab = tabId;
  
  // Update UI active states
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.toggle('active', tab.id === tabId);
  });
  
  // Scroll to main content area
  if (tabId !== 'tab-profile' || window.scrollY > 400) {
    document.querySelector('.nav-links').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Auto scroll top inside the tab
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// TAB 1: PROFILE R&D RENDERING
// ==========================================
function renderProfileTab() {
  const profile = window.lumiCareerData.profile;
  const sidebarNav = document.getElementById('profileSectionsNav');
  const bodyContent = document.getElementById('profileBody');
  
  sidebarNav.innerHTML = '';
  bodyContent.innerHTML = '';
  
  profile.sections.forEach((sec, idx) => {
    // Generate Sidebar Button
    const btn = document.createElement('button');
    btn.className = `profile-nav-btn ${idx === 0 ? 'active' : ''}`;
    btn.textContent = sec.title;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.profile-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const element = document.getElementById(`profile-heading-${idx}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    sidebarNav.appendChild(btn);
    
    // Generate Article Content
    const secHeading = document.createElement('h2');
    secHeading.id = `profile-heading-${idx}`;
    secHeading.textContent = sec.title;
    bodyContent.appendChild(secHeading);
    
    const secBody = document.createElement('div');
    secBody.innerHTML = sec.html;
    bodyContent.appendChild(secBody);
  });
}

// ==========================================
// TAB 2: ROLES EXPLORER RENDERING
// ==========================================
function renderRolesTab() {
  const roles = window.lumiCareerData.roles;
  const selectorList = document.getElementById('rolesSelectorList');
  
  // Render roles list on sidebar
  selectorList.innerHTML = '';
  roles.forEach((role, idx) => {
    const btn = document.createElement('button');
    btn.className = `role-selector-btn ${role.id === appState.activeRoleId ? 'active' : ''}`;
    btn.dataset.id = role.id;
    btn.innerHTML = `
      <span>${role.title}</span>
      <span class="role-selector-num">${String(idx + 1).padStart(2, '0')}</span>
    `;
    btn.addEventListener('click', () => {
      appState.activeRoleId = role.id;
      document.querySelectorAll('.role-selector-btn').forEach(b => b.classList.toggle('active', b.dataset.id === role.id));
      populateRoleDetail();
    });
    selectorList.appendChild(btn);
  });
  
  // Inner Position sub-tabs click handlers (Overview, Ladder, Matrix, Growth)
  const innerTabs = document.querySelectorAll('.inner-tab-btn');
  innerTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeRoleInnerSec = btn.dataset.sec;
      innerTabs.forEach(b => b.classList.toggle('active', b.dataset.sec === btn.dataset.sec));
      
      document.querySelectorAll('.inner-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === `role-sec-${btn.dataset.sec}`);
      });
    });
  });

  // Action button to start self assessment
  document.getElementById('startAssessmentBtn').addEventListener('click', () => {
    appState.checklistRoleId = appState.activeRoleId;
    // Set level to the first one available
    const roleObj = roles.find(r => r.id === appState.activeRoleId);
    if (roleObj && roleObj.levels && roleObj.levels.length > 0) {
      appState.checklistLevelId = roleObj.levels[0];
    }
    
    // Update dropdown values in assessment tab
    const roleSelect = document.getElementById('checklistRoleSelect');
    const levelSelect = document.getElementById('checklistLevelSelect');
    roleSelect.value = appState.checklistRoleId;
    populateChecklistLevels();
    levelSelect.value = appState.checklistLevelId;
    
    renderChecklistQuestions();
    switchTab('tab-checklist');
  });

  populateRoleDetail();
}

function populateRoleDetail() {
  const roles = window.lumiCareerData.roles;
  const role = roles.find(r => r.id === appState.activeRoleId) || roles[0];
  
  // General Headers
  document.getElementById('roleDetailTitle').textContent = role.title;
  document.getElementById('roleOverviewText').innerHTML = formatInlineHtml(role.sections.vaiTro || role.overview);
  
  // 1. Overview Tab
  // Render Input & Output
  const ioContainer = document.getElementById('roleIOContent');
  ioContainer.innerHTML = '';
  if (role.sections.dauVaoRa && role.sections.dauVaoRa.length > 0) {
    const io = role.sections.dauVaoRa[0];
    ioContainer.innerHTML = `
      <div class="io-box">
        <strong>Đầu vào:</strong>
        <p>${formatInlineHtml(io.input)}</p>
      </div>
      <div class="io-box mt-2">
        <strong>Đầu ra:</strong>
        <p>${formatInlineHtml(io.output)}</p>
      </div>
    `;
  } else {
    ioContainer.innerHTML = `<p class="text-muted">Không có đặc tả đầu vào đầu ra.</p>`;
  }

  // Render Scope table
  const scopeContainer = document.getElementById('roleScopeTableContainer');
  scopeContainer.innerHTML = '';
  if (role.sections.phamVi && role.sections.phamVi.length > 0) {
    let html = '<table><thead><tr><th>Nhóm việc</th><th>Nội dung công việc</th></tr></thead><tbody>';
    role.sections.phamVi.forEach(item => {
      html += `<tr><td><strong>${formatInlineHtml(item.group)}</strong></td><td>${formatInlineHtml(item.content)}</td></tr>`;
    });
    html += '</tbody></table>';
    scopeContainer.innerHTML = html;
  } else {
    scopeContainer.innerHTML = `<p class="text-muted">Không có dữ liệu phạm vi công việc.</p>`;
  }

  // 2. Ladder Tab
  const ladderFlow = document.getElementById('roleLadderFlow');
  const ladderDesc = document.getElementById('roleLadderDescription');
  ladderFlow.innerHTML = '';
  ladderDesc.innerHTML = '';
  
  if (role.levels && role.levels.length > 0) {
    role.levels.forEach((lvl, idx) => {
      const node = document.createElement('div');
      node.className = `ladder-node ${idx === 0 ? 'active' : ''}`;
      node.textContent = lvl;
      node.addEventListener('click', () => {
        ladderFlow.querySelectorAll('.ladder-node').forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        showLadderLevelDetails(role, lvl);
      });
      ladderFlow.appendChild(node);
      
      if (idx < role.levels.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'ladder-arrow';
        arrow.innerHTML = '→';
        ladderFlow.appendChild(arrow);
      }
    });
    showLadderLevelDetails(role, role.levels[0]);
  } else {
    ladderFlow.innerHTML = `<p class="text-muted">Không có sơ đồ level.</p>`;
  }

  // 3. Matrix (Chi tiết Yêu cầu)
  const filterBtns = document.querySelectorAll('.matrix-filter-btn');
  const lvlDropdown = document.getElementById('singleLevelSelect');
  
  // Fill dropdown options for this role
  lvlDropdown.innerHTML = '';
  if (role.levels) {
    role.levels.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l;
      opt.textContent = l;
      lvlDropdown.appendChild(opt);
    });
    appState.selectedMatrixLevel = role.levels[0];
  }
  
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      appState.matrixFilterMode = btn.dataset.matrixMode;
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.matrixMode === btn.dataset.matrixMode));
      lvlDropdown.style.display = btn.dataset.matrixMode === 'single' ? 'inline-block' : 'none';
      renderRoleMatrixTables(role);
    };
  });
  
  lvlDropdown.onchange = (e) => {
    appState.selectedMatrixLevel = e.target.value;
    renderRoleMatrixTables(role);
  };
  
  renderRoleMatrixTables(role);

  // 4. Growth & Pitfalls Tab
  // Render Muốn lên level tiếp theo
  const lenLevelContainer = document.getElementById('roleLenLevelContainer');
  lenLevelContainer.innerHTML = '';
  if (role.sections.lenLevel && role.sections.lenLevel.length > 0) {
    let html = '<table><thead><tr><th>Từ</th><th>Lên</th><th>Cần chứng minh</th></tr></thead><tbody>';
    role.sections.lenLevel.forEach(item => {
      html += `<tr><td><strong>${formatInlineHtml(item.from)}</strong></td><td><strong>${formatInlineHtml(item.to)}</strong></td><td>${formatInlineHtml(item.proof)}</td></tr>`;
    });
    html += '</tbody></table>';
    lenLevelContainer.innerHTML = html;
  } else {
    lenLevelContainer.innerHTML = `<p class="text-muted">Không có dữ liệu thăng tiến.</p>`;
  }

  // Render Lỗi phổ biến
  const loiKietContainer = document.getElementById('roleLoiKietContainer');
  loiKietContainer.innerHTML = '';
  if (role.sections.loiPhoBien && role.sections.loiPhoBien.length > 0) {
    let html = '<table><thead><tr><th>Lỗi phổ biến</th><th>Cách khắc phục</th></tr></thead><tbody>';
    role.sections.loiPhoBien.forEach(item => {
      html += `<tr><td class="text-danger"><strong>${formatInlineHtml(item.error)}</strong></td><td>${formatInlineHtml(item.fix)}</td></tr>`;
    });
    html += '</tbody></table>';
    loiKietContainer.innerHTML = html;
  } else {
    loiKietContainer.innerHTML = `<p class="text-muted">Không có dữ liệu lỗi phổ biến.</p>`;
  }

  // Render Dấu hiệu nhận biết
  const dauHieuContainer = document.getElementById('roleDauHieuContainer');
  dauHieuContainer.innerHTML = '';
  if (role.sections.dauHieuNhanBiet && role.sections.dauHieuNhanBiet.length > 0) {
    let html = '<table><thead><tr><th>Level</th><th>Dấu hiệu tích cực</th><th>Dấu hiệu chưa tới</th></tr></thead><tbody>';
    role.sections.dauHieuNhanBiet.forEach(item => {
      html += `<tr><td><strong>${formatInlineHtml(item.level)}</strong></td><td class="text-success">${formatInlineHtml(item.positive)}</td><td class="text-warning">${formatInlineHtml(item.negative)}</td></tr>`;
    });
    html += '</tbody></table>';
    dauHieuContainer.innerHTML = html;
  } else {
    dauHieuContainer.innerHTML = `<p class="text-muted">Không có dữ liệu dấu hiệu nhận biết.</p>`;
  }
}

function showLadderLevelDetails(role, levelName) {
  const ladderDesc = document.getElementById('roleLadderDescription');
  ladderDesc.innerHTML = `<h5>Chi tiết mức năng lực: ${levelName}</h5>`;
  
  let detailsFound = false;
  
  // Find information in "So sánh level" table
  if (role.sections.soSanhLevel && role.sections.soSanhLevel.rows) {
    const lvlIdx = role.levels.indexOf(levelName);
    if (lvlIdx !== -1) {
      detailsFound = true;
      let html = `<ul style="margin-top:10px; padding-left: 20px;">`;
      role.sections.soSanhLevel.rows.forEach(row => {
        const val = row.levels[lvlIdx] || "";
        if (val) {
          html += `<li style="margin-bottom: 8px;"><strong>${formatInlineHtml(row.dimension)}:</strong> ${formatInlineHtml(val)}</li>`;
        }
      });
      html += `</ul>`;
      ladderDesc.innerHTML += html;
    }
  }

  // Find information in "Năng lực cốt lõi" table
  if (role.sections.nangLucCotLoi && role.sections.nangLucCotLoi.rows) {
    const lvlIdx = role.levels.indexOf(levelName);
    if (lvlIdx !== -1) {
      detailsFound = true;
      let html = `<h6 style="margin-top: 14px; font-weight: 700; color: var(--text-secondary);">NĂNG LỰC CỐT LÕI YÊU CẦU:</h6>`;
      html += `<ul style="margin-top:8px; padding-left: 20px;">`;
      role.sections.nangLucCotLoi.rows.forEach(row => {
        const val = row.levels[lvlIdx] || "";
        if (val) {
          html += `<li style="margin-bottom: 8px;"><strong>${formatInlineHtml(row.category)}:</strong> ${formatInlineHtml(val)}</li>`;
        }
      });
      html += `</ul>`;
      ladderDesc.innerHTML += html;
    }
  }
  
  if (!detailsFound) {
    ladderDesc.innerHTML += `<p class="text-muted">Không tìm thấy mô tả chi tiết cho level này.</p>`;
  }
}

function renderRoleMatrixTables(role) {
  const soSanhWrapper = document.getElementById('roleSoSanhContainer');
  const nangLucWrapper = document.getElementById('roleNangLucContainer');
  
  soSanhWrapper.innerHTML = '';
  nangLucWrapper.innerHTML = '';

  const buildTable = (sectionData) => {
    if (!sectionData || !sectionData.rows || sectionData.rows.length === 0) {
      return `<p class="text-muted">Không có dữ liệu.</p>`;
    }

    const headers = sectionData.headers;
    const rows = sectionData.rows;
    
    if (appState.matrixFilterMode === 'all') {
      // Render entire table
      let html = '<table><thead><tr>';
      headers.forEach(h => {
        html += `<th>${formatInlineHtml(h)}</th>`;
      });
      html += '</tr></thead><tbody>';
      rows.forEach(r => {
        html += `<tr><td><strong>${formatInlineHtml(r.dimension || r.category)}</strong></td>`;
        r.levels.forEach(val => {
          html += `<td>${formatInlineHtml(val)}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      return html;
    } else {
      // Render single level view (card style layout is cleaner for single column display)
      const targetLvl = appState.selectedMatrixLevel;
      const lvlIdx = role.levels.indexOf(targetLvl);
      
      if (lvlIdx === -1) return `<p class="text-muted">Không tìm thấy level.</p>`;
      
      let html = '<table><thead><tr><th>Khía cạnh đánh giá</th><th>Mô tả chi tiết</th></tr></thead><tbody>';
      rows.forEach(r => {
        const cellVal = r.levels[lvlIdx] || "N/A";
        html += `<tr>
          <td style="width: 250px;"><strong>${formatInlineHtml(r.dimension || r.category)}</strong></td>
          <td>${formatInlineHtml(cellVal)}</td>
        </tr>`;
      });
      html += '</tbody></table>';
      return html;
    }
  };

  soSanhWrapper.innerHTML = buildTable(role.sections.soSanhLevel);
  nangLucWrapper.innerHTML = buildTable(role.sections.nangLucCotLoi);
}

// ==========================================
// TAB 3: MA TRẬN SO SÁNH (COMPARE MATRIX)
// ==========================================
function renderCompareTab() {
  const roles = window.lumiCareerData.roles;
  const selectType = document.getElementById('compareTypeSelect');
  const rolesCompareRow = document.getElementById('rolesCompareControls');
  const vertCompareRow = document.getElementById('verticalCompareControls');
  
  // Fill Comparison options
  const checkboxGrid = document.getElementById('compareRolesCheckboxes');
  checkboxGrid.innerHTML = '';
  
  // Limit to 3 roles selected, save selection state
  roles.forEach((role, idx) => {
    const label = document.createElement('label');
    label.className = 'checkbox-label';
    
    const checked = idx < 2 ? 'checked' : ''; // Select first 2 by default
    if (idx < 2) {
      appState.compareSelectedRoles.push(role.id);
    }
    
    label.innerHTML = `
      <input type="checkbox" value="${role.id}" ${checked}>
      <span>${role.title}</span>
    `;
    
    const input = label.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) {
        if (appState.compareSelectedRoles.length >= 3) {
          input.checked = false;
          showToast("Chỉ chọn tối đa 3 vị trí để so sánh dễ đọc nhất.");
          return;
        }
        appState.compareSelectedRoles.push(role.id);
      } else {
        appState.compareSelectedRoles = appState.compareSelectedRoles.filter(id => id !== role.id);
      }
      generateComparisonMatrix();
    });
    
    checkboxGrid.appendChild(label);
  });

  // Populate Single Role selector for vertical compare
  const singleRoleSelect = document.getElementById('compareSingleRoleSelect');
  singleRoleSelect.innerHTML = '';
  roles.forEach(role => {
    const opt = document.createElement('option');
    opt.value = role.id;
    opt.textContent = role.title;
    singleRoleSelect.appendChild(opt);
  });
  
  // Initialize Level Selector change
  const levelSelect = document.getElementById('compareLevelSelect');
  levelSelect.addEventListener('change', (e) => {
    appState.compareLevel = e.target.value;
    generateComparisonMatrix();
  });
  
  singleRoleSelect.addEventListener('change', (e) => {
    appState.compareSingleRole = e.target.value;
    generateComparisonMatrix();
  });

  // Switch comparison modes
  selectType.addEventListener('change', (e) => {
    appState.compareType = e.target.value;
    if (appState.compareType === 'roles-compare') {
      rolesCompareRow.style.display = 'flex';
      vertCompareRow.style.display = 'none';
    } else {
      rolesCompareRow.style.display = 'none';
      vertCompareRow.style.display = 'flex';
    }
    generateComparisonMatrix();
  });

  generateComparisonMatrix();
}

function generateComparisonMatrix() {
  const container = document.getElementById('compareMatrixContainer');
  container.innerHTML = '';
  
  const roles = window.lumiCareerData.roles;
  
  if (appState.compareType === 'roles-compare') {
    // Check if we have roles selected
    if (appState.compareSelectedRoles.length === 0) {
      container.innerHTML = `<p class="text-muted text-center" style="padding: 40px;">Vui lòng chọn ít nhất 1 vị trí chuyên môn để so sánh.</p>`;
      return;
    }
    
    const selectedRoles = roles.filter(r => appState.compareSelectedRoles.includes(r.id));
    const targetLvl = appState.compareLevel;
    
    // We want to extract common dimensions (e.g. Phạm vi ảnh hưởng, Mức tự chủ...) and list them side-by-side
    // Build Headers
    let html = '<table><thead><tr><th>Khía cạnh đánh giá</th>';
    selectedRoles.forEach(role => {
      html += `<th>${role.title}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    // Let's gather all dimensions from "soSanhLevel" & "nangLucCotLoi"
    const commonDimensions = [
      { name: "Phạm vi ảnh hưởng", type: "soSanhLevel", label: "Phạm vi ảnh hưởng" },
      { name: "Mức tự chủ", type: "soSanhLevel", label: "Mức tự chủ" },
      { name: "Chất lượng đầu ra", type: "soSanhLevel", label: "Chất lượng đầu ra / Công việc" },
      { name: "Phối hợp", type: "soSanhLevel", label: "Phối hợp liên team" },
      { name: "Tài liệu", type: "soSanhLevel", label: "Tài liệu & Quy trình" },
      { name: "Chuyên môn", type: "nangLucCotLoi", label: "Năng lực chuyên môn" },
      { name: "Ownership", type: "nangLucCotLoi", label: "Ownership & Mơ hồ" },
      { name: "Chất lượng và rủi ro", type: "nangLucCotLoi", label: "Kiểm soát chất lượng/Rủi ro" }
    ];
    
    commonDimensions.forEach(dim => {
      html += `<tr><td><strong>${dim.label}</strong></td>`;
      
      selectedRoles.forEach(role => {
        const sec = role.sections[dim.type];
        let foundVal = "Không có thông số rõ ràng.";
        
        if (sec && sec.rows) {
          // Find row that match dim name
          const matchedRow = sec.rows.find(row => {
            const rowTitle = (row.dimension || row.category || "").toLowerCase();
            return rowTitle.includes(dim.name.toLowerCase()) || dim.name.toLowerCase().includes(rowTitle);
          });
          
          if (matchedRow) {
            // Find cell index for targetLevel
            // Since levels headers might match Junior, Middle, Senior, Lead/Staff
            const lvlIdx = role.levels.findIndex(l => l.toLowerCase().includes(targetLvl.toLowerCase()) || targetLvl.toLowerCase().includes(l.toLowerCase()));
            if (lvlIdx !== -1 && matchedRow.levels[lvlIdx]) {
              foundVal = matchedRow.levels[lvlIdx];
            }
          }
        }
        html += `<td>${formatInlineHtml(foundVal)}</td>`;
      });
      
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
    
  } else {
    // VERTICAL LEVEL COMPARISON FOR A SINGLE ROLE
    const singleRole = roles.find(r => r.id === appState.compareSingleRole) || roles[0];
    
    if (!singleRole.sections.soSanhLevel || !singleRole.sections.soSanhLevel.rows) {
      container.innerHTML = `<p class="text-muted text-center" style="padding: 40px;">Vị trí này không có bảng so sánh dọc.</p>`;
      return;
    }
    
    const headers = singleRole.sections.soSanhLevel.headers;
    const rows = [...singleRole.sections.soSanhLevel.rows];
    
    // Add Core competencies too
    if (singleRole.sections.nangLucCotLoi && singleRole.sections.nangLucCotLoi.rows) {
      rows.push(...singleRole.sections.nangLucCotLoi.rows);
    }
    
    let html = '<table><thead><tr><th>Khía cạnh</th>';
    headers.slice(1).forEach(h => {
      html += `<th>${formatInlineHtml(h)}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    rows.forEach(r => {
      html += `<tr><td><strong>${formatInlineHtml(r.dimension || r.category)}</strong></td>`;
      r.levels.forEach(val => {
        html += `<td>${formatInlineHtml(val)}</td>`;
      });
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
  }
}

// ==========================================
// TAB 4: TỰ ĐÁNH GIÁ RENDERING
// ==========================================
function renderChecklistTab() {
  const roles = window.lumiCareerData.roles;
  const roleSelect = document.getElementById('checklistRoleSelect');
  const levelSelect = document.getElementById('checklistLevelSelect');
  
  // Fill role dropdown options
  roleSelect.innerHTML = '';
  roles.forEach(role => {
    const opt = document.createElement('option');
    opt.value = role.id;
    opt.textContent = role.title;
    roleSelect.appendChild(opt);
  });
  
  roleSelect.value = appState.checklistRoleId;
  populateChecklistLevels();
  
  // Action Handlers
  roleSelect.addEventListener('change', (e) => {
    appState.checklistRoleId = e.target.value;
    populateChecklistLevels();
    loadChecklistAnswers();
    renderChecklistQuestions();
  });
  
  levelSelect.addEventListener('change', (e) => {
    appState.checklistLevelId = e.target.value;
    loadChecklistAnswers();
    renderChecklistQuestions();
  });

  // Buttons Action
  document.getElementById('saveChecklistBtn').onclick = saveChecklistToLocal;
  document.getElementById('resetChecklistBtn').onclick = resetChecklistAnswers;
  document.getElementById('exportChecklistBtn').onclick = () => window.print();

  loadChecklistAnswers();
  renderChecklistQuestions();
}

function populateChecklistLevels() {
  const roles = window.lumiCareerData.roles;
  const levelSelect = document.getElementById('checklistLevelSelect');
  const activeRole = roles.find(r => r.id === appState.checklistRoleId) || roles[0];
  
  levelSelect.innerHTML = '';
  if (activeRole.levels) {
    activeRole.levels.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l;
      opt.textContent = l;
      levelSelect.appendChild(opt);
    });
    // Set level state
    appState.checklistLevelId = activeRole.levels[0];
  }
}

function loadChecklistAnswers() {
  const storageKey = `lumi_assessment_${appState.checklistRoleId}_${appState.checklistLevelId}`;
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    appState.checklistAnswers = JSON.parse(savedData);
  } else {
    appState.checklistAnswers = {};
  }
}

function saveChecklistToLocal() {
  const storageKey = `lumi_assessment_${appState.checklistRoleId}_${appState.checklistLevelId}`;
  localStorage.setItem(storageKey, JSON.stringify(appState.checklistAnswers));
  showToast("Lưu tiến trình đánh giá thành công!");
}

function resetChecklistAnswers() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ đánh giá của vị trí này?")) {
    appState.checklistAnswers = {};
    const storageKey = `lumi_assessment_${appState.checklistRoleId}_${appState.checklistLevelId}`;
    localStorage.removeItem(storageKey);
    renderChecklistQuestions();
    showToast("Đã xoá các đánh giá.");
  }
}

function renderChecklistQuestions() {
  const roles = window.lumiCareerData.roles;
  const activeRole = roles.find(r => r.id === appState.checklistRoleId) || roles[0];
  const listContainer = document.getElementById('checklistQuestionsList');
  const checklistTitle = document.getElementById('checklistTitle');
  
  listContainer.innerHTML = '';
  
  // Update Checklist Title
  checklistTitle.innerHTML = `Tự Đánh Giá: Vị trí ${activeRole.title}`;
  
  // Check if role has checklist section parsed
  let checklistItems = activeRole.sections.checklist || [];
  
  // If checklist is empty, fallback to simple questions derived from core dimensions
  if (checklistItems.length === 0 && activeRole.sections.soSanhLevel && activeRole.sections.soSanhLevel.rows) {
    checklistItems = activeRole.sections.soSanhLevel.rows.map(r => ({
      question: `Tôi tự đánh giá năng lực của mình về khía cạnh "${r.dimension}"`
    }));
  }
  
  if (checklistItems.length === 0) {
    listContainer.innerHTML = `<p class="text-muted text-center" style="padding: 40px;">Không tìm thấy câu hỏi tự đánh giá cho vị trí này.</p>`;
    updateProgressIndicator(0, 0);
    return;
  }
  
  checklistItems.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'checklist-question-row';
    
    const ansVal = appState.checklistAnswers[index] || 'none';
    
    row.innerHTML = `
      <span class="checklist-question-text">${index + 1}. ${formatInlineHtml(item.question)}</span>
      <div class="checklist-options-group">
        <label class="checklist-option-label">
          <input type="radio" name="question_${index}" value="none" ${ansVal === 'none' ? 'checked' : ''}>
          Chưa có
        </label>
        <label class="checklist-option-label">
          <input type="radio" name="question_${index}" value="learning" ${ansVal === 'learning' ? 'checked' : ''}>
          Đang học
        </label>
        <label class="checklist-option-label">
          <input type="radio" name="question_${index}" value="stable" ${ansVal === 'stable' ? 'checked' : ''}>
          Ổn định
        </label>
        <label class="checklist-option-label">
          <input type="radio" name="question_${index}" value="excel" ${ansVal === 'excel' ? 'checked' : ''}>
          Vượt trội
        </label>
      </div>
    `;
    
    // Add Event listener to options
    row.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        appState.checklistAnswers[index] = e.target.value;
        // Auto-save checklist to localStorage
        const storageKey = `lumi_assessment_${appState.checklistRoleId}_${appState.checklistLevelId}`;
        localStorage.setItem(storageKey, JSON.stringify(appState.checklistAnswers));
        calculateChecklistProgress(checklistItems.length);
      });
    });
    
    listContainer.appendChild(row);
  });
  
  calculateChecklistProgress(checklistItems.length);
}

function calculateChecklistProgress(totalCount) {
  let stableExcelCount = 0;
  
  Object.keys(appState.checklistAnswers).forEach(key => {
    const val = appState.checklistAnswers[key];
    if (val === 'stable' || val === 'excel') {
      stableExcelCount++;
    }
  });
  
  updateProgressIndicator(stableExcelCount, totalCount);
}

function updateProgressIndicator(stableCount, totalCount) {
  const progressCircle = document.getElementById('checklistProgressCircle');
  const progressText = document.getElementById('checklistProgressText');
  const statsText = document.getElementById('checklistStatsText');
  
  const percentage = totalCount > 0 ? Math.round((stableCount / totalCount) * 100) : 0;
  
  // Calculate SVG stroke offset. Radius is 40, circumference is 2 * PI * r = 251.2
  const circumference = 251.2;
  const offset = circumference - (percentage / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
  
  progressText.textContent = `${percentage}%`;
  statsText.textContent = `${stableCount} trên ${totalCount} tiêu chuẩn đạt trạng thái "Ổn định" hoặc "Vượt trội".`;
}

// ==========================================
// SEARCH HANDLING
// ==========================================
function initSearch() {
  const searchInput = document.getElementById('globalSearch');
  const clearBtn = document.getElementById('searchClearBtn');
  const resultsPanel = document.getElementById('searchResultsPanel');
  const closeBtn = document.getElementById('closeSearchBtn');
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    appState.searchQuery = query;
    
    if (query.length > 0) {
      clearBtn.hidden = false;
      performGlobalSearch(query);
    } else {
      clearBtn.hidden = true;
      resultsPanel.hidden = true;
    }
  });
  
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.hidden = true;
    resultsPanel.hidden = true;
    appState.searchQuery = '';
  });
  
  closeBtn.addEventListener('click', () => {
    resultsPanel.hidden = true;
  });
}

function performGlobalSearch(query) {
  const results = [];
  const lowercaseQuery = query.toLowerCase();
  const data = window.lumiCareerData;
  const resultsPanel = document.getElementById('searchResultsPanel');
  const resultsCount = document.getElementById('searchResultsCount');
  const resultsList = document.getElementById('searchResultsList');
  
  // 1. Search in Profile
  data.profile.sections.forEach((sec, idx) => {
    const secText = (sec.title + " " + sec.html).toLowerCase();
    if (secText.includes(lowercaseQuery)) {
      results.push({
        type: 'profile',
        badge: 'Profile R&D',
        title: sec.title,
        snippet: getSnippet(sec.html, query),
        targetId: idx
      });
    }
  });
  
  // 2. Search in Career Roles
  data.roles.forEach(role => {
    // 2a. Search in title/overview
    const overviewText = (role.title + " " + role.overview).toLowerCase();
    if (overviewText.includes(lowercaseQuery)) {
      results.push({
        type: 'role',
        roleId: role.id,
        badge: 'Tổng quan vai trò',
        title: role.title,
        snippet: role.overview,
        sectionTab: 'overview'
      });
    }
    
    // 2b. Search in Scope
    if (role.sections.phamVi) {
      role.sections.phamVi.forEach(item => {
        const text = (item.group + " " + item.content).toLowerCase();
        if (text.includes(lowercaseQuery)) {
          results.push({
            type: 'role',
            roleId: role.id,
            badge: `${role.title} - Phạm vi`,
            title: item.group,
            snippet: item.content,
            sectionTab: 'overview'
          });
        }
      });
    }
    
    // 2c. Search in Matrix dimensions
    const matrixSecs = ['soSanhLevel', 'nangLucCotLoi'];
    matrixSecs.forEach(secName => {
      const sec = role.sections[secName];
      if (sec && sec.rows) {
        sec.rows.forEach(row => {
          const rowTitle = row.dimension || row.category;
          const matchedVal = row.levels.find(l => l.toLowerCase().includes(lowercaseQuery));
          
          if (rowTitle.toLowerCase().includes(lowercaseQuery) || matchedVal) {
            results.push({
              type: 'role',
              roleId: role.id,
              badge: `${role.title} - Tiêu chuẩn`,
              title: rowTitle,
              snippet: row.levels.join(" | "),
              sectionTab: 'matrix'
            });
          }
        });
      }
    });
    
    // 2d. Search in growth / pitfalls
    if (role.sections.loiPhoBien) {
      role.sections.loiPhoBien.forEach(item => {
        const text = (item.error + " " + item.fix).toLowerCase();
        if (text.includes(lowercaseQuery)) {
          results.push({
            type: 'role',
            roleId: role.id,
            badge: `${role.title} - Pitfall`,
            title: `Lỗi: ${item.error}`,
            snippet: `Cách sửa: ${item.fix}`,
            sectionTab: 'growth'
          });
        }
      });
    }
    
    if (role.sections.lenLevel) {
      role.sections.lenLevel.forEach(item => {
        const text = (item.from + " " + item.to + " " + item.proof).toLowerCase();
        if (text.includes(lowercaseQuery)) {
          results.push({
            type: 'role',
            roleId: role.id,
            badge: `${role.title} - Lộ trình`,
            title: `Thăng tiến từ ${item.from} lên ${item.to}`,
            snippet: `Minh chứng cần có: ${item.proof}`,
            sectionTab: 'growth'
          });
        }
      });
    }
    
    if (role.sections.checklist) {
      role.sections.checklist.forEach(item => {
        if (item.question.toLowerCase().includes(lowercaseQuery)) {
          results.push({
            type: 'role',
            roleId: role.id,
            badge: `${role.title} - Checklist`,
            title: `Tiêu chí kiểm thử bản thân`,
            snippet: item.question,
            sectionTab: 'overview'
          });
        }
      });
    }
  });

  // Render Results List
  resultsList.innerHTML = '';
  resultsPanel.hidden = false;
  resultsCount.textContent = `Tìm thấy ${results.length} kết quả phù hợp với từ khoá "${query}".`;
  
  if (results.length === 0) {
    resultsList.innerHTML = `<p class="text-muted text-center" style="padding: 20px;">Không tìm thấy kết quả nào trùng khớp.</p>`;
    return;
  }
  
  results.forEach(res => {
    const item = document.createElement('div');
    item.className = 'search-item';
    
    // Highlight matched text in snippet and title
    const escapedQuery = escapeRegExp(query);
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const highlightedTitle = res.title.replace(regex, '<mark>$1</mark>');
    const highlightedSnippet = res.snippet.replace(regex, '<mark>$1</mark>');
    
    item.innerHTML = `
      <div class="search-item-header">
        <span class="search-item-title">${highlightedTitle}</span>
        <span class="search-item-badge">${res.badge}</span>
      </div>
      <div class="search-item-snippet">${highlightedSnippet}</div>
    `;
    
    item.addEventListener('click', () => {
      if (res.type === 'profile') {
        switchTab('tab-profile');
        
        // Scroll to heading
        const btn = document.querySelectorAll('.profile-nav-btn')[res.targetId];
        if (btn) btn.click();
      } else {
        appState.activeRoleId = res.roleId;
        appState.activeRoleInnerSec = res.sectionTab;
        
        switchTab('tab-roles');
        
        // Update Roles explorer left selection buttons
        document.querySelectorAll('.role-selector-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.id === res.roleId);
        });
        
        // Update Inner tab buttons active states
        document.querySelectorAll('.inner-tab-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.sec === res.sectionTab);
        });
        
        document.querySelectorAll('.inner-section').forEach(sec => {
          sec.classList.toggle('active', sec.id === `role-sec-${res.sectionTab}`);
        });
        
        populateRoleDetail();
      }
      
      // Hide search panel
      resultsPanel.hidden = true;
    });
    
    resultsList.appendChild(item);
  });
}
