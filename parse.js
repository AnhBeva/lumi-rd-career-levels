const fs = require('fs');
const path = require('path');

const WORKSPACE = "/Users/tuananh/Library/Mobile Documents/com~apple~CloudDocs/CODEX/Level R&D";
const CAREER_DIR = path.join(WORKSPACE, "lumi-rd-career-levels");
const PROFILE_FILE = path.join(WORKSPACE, "lumi-rd-profile.md");
const OUTPUT_FILE = path.join(WORKSPACE, "assets/data.js");

function mdToHtml(md) {
  if (!md) return "";
  // Basic inline formatting: code, bold, links
  return md
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function parseTable(lines, startIdx) {
  const rows = [];
  let i = startIdx;
  while (i < lines.length && lines[i].trim().startsWith('|')) {
    rows.push(lines[i].trim());
    i++;
  }
  if (rows.length < 3) return { table: null, nextIdx: startIdx };

  const headers = rows[0].split('|').slice(1, -1).map(s => s.trim());
  const body = [];
  for (let r = 2; r < rows.length; r++) {
    const cells = rows[r].split('|').slice(1, -1).map(s => s.trim());
    if (cells.length > 0 && cells.some(c => c !== "")) {
      body.push(cells);
    }
  }
  return {
    table: { headers, rows: body },
    nextIdx: i
  };
}

function parseProfile() {
  const content = fs.readFileSync(PROFILE_FILE, 'utf8');
  const lines = content.split(/\r?\n/);
  
  const result = {
    title: "Profile Phòng R&D Lumi",
    sections: []
  };

  let currentSection = null;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('# ')) {
      result.title = trimmed.replace('# ', '');
      i++;
      continue;
    }

    if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
      if (currentSection) {
        result.sections.push(currentSection);
      }
      const isSub = trimmed.startsWith('### ');
      const title = trimmed.replace(isSub ? '### ' : '## ', '');
      currentSection = {
        title,
        level: isSub ? 3 : 2,
        content: [],
        tables: []
      };
      i++;
      continue;
    }

    if (trimmed.startsWith('|')) {
      const { table, nextIdx } = parseTable(lines, i);
      if (table) {
        if (!currentSection) {
          currentSection = { title: "Chung", level: 2, content: [], tables: [] };
        }
        currentSection.tables.push(table);
        // We'll insert a placeholder in the content to render tables in order if needed,
        // or just let the tables be rendered at the end of the section.
        currentSection.content.push(`<!-- TABLE_${currentSection.tables.length - 1} -->`);
        i = nextIdx;
        continue;
      }
    }

    if (currentSection) {
      currentSection.content.push(line);
    }
    i++;
  }
  
  if (currentSection) {
    result.sections.push(currentSection);
  }

  // Post process sections to render markdown lists/paragraphs into HTML
  result.sections.forEach(sec => {
    let html = [];
    let inList = false;
    let listTag = '';
    
    sec.content.forEach((line) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) {
          inList = true;
          listTag = 'ul';
          html.push('<ul>');
        }
        html.push(`<li>${mdToHtml(trimmed.substring(2))}</li>`);
      } else if (/^\d+\.\s+/.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s+/, '');
        if (!inList) {
          inList = true;
          listTag = 'ol';
          html.push('<ol>');
        }
        html.push(`<li>${mdToHtml(text)}</li>`);
      } else {
        if (inList) {
          html.push(`</${listTag}>`);
          inList = false;
        }
        if (trimmed.startsWith('<!-- TABLE_')) {
          const tableIdx = parseInt(trimmed.match(/<!-- TABLE_(\d+) -->/)[1]);
          const table = sec.tables[tableIdx];
          let tableHtml = '<table><thead><tr>';
          table.headers.forEach(h => {
            tableHtml += `<th>${mdToHtml(h)}</th>`;
          });
          tableHtml += '</tr></thead><tbody>';
          table.rows.forEach(row => {
            tableHtml += '<tr>';
            row.forEach(cell => {
              tableHtml += `<td>${mdToHtml(cell)}</td>`;
            });
            tableHtml += '</tr>';
          });
          tableHtml += '</tbody></table>';
          html.push(tableHtml);
        } else if (trimmed) {
          html.push(`<p>${mdToHtml(trimmed)}</p>`);
        }
      }
    });

    if (inList) {
      html.push(`</${listTag}>`);
    }

    sec.html = html.join('\n');
    delete sec.content;
    delete sec.tables;
  });

  return result;
}

function parseCareerLevel(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split(/\r?\n/);
  const basename = path.basename(filepath);

  const role = {
    id: basename.replace(/^\d+-/, '').replace('.md', ''),
    title: "",
    rawTitle: "",
    overview: "",
    sections: {}
  };

  let currentHeading = "";
  let sectionLines = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('# ')) {
      role.rawTitle = trimmed.replace('# ', '');
      // Clean title, e.g. "Khung Level Vị Trí Thiết Kế R&D Lumi" -> "Thiết Kế"
      role.title = role.rawTitle
        .replace("Khung Level Vị Trí ", "")
        .replace(" R&D Lumi", "")
        .replace(" Vị Trí ", "")
        .replace(" R&D", "");
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      if (currentHeading) {
        role.sections[currentHeading] = sectionLines;
      }
      currentHeading = trimmed.replace('## ', '');
      sectionLines = [];
      i++;
      continue;
    }

    if (currentHeading) {
      sectionLines.push(line);
    } else if (trimmed && !role.overview) {
      role.overview = trimmed;
    }
    i++;
  }

  if (currentHeading) {
    role.sections[currentHeading] = sectionLines;
  }

  // Now parse each section into structured objects
  const structuredSections = {};

  for (const [secTitle, secLines] of Object.entries(role.sections)) {
    const titleClean = secTitle.toLowerCase();

    if (titleClean.includes("tổng quan vai trò")) {
      structuredSections.vaiTro = secLines.join('\n').trim();
    } 
    else if (titleClean.includes("phạm vi công việc chính")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.phamVi = tableData ? tableData.rows.map(r => ({
        group: r[0],
        content: r[1]
      })) : [];
    } 
    else if (titleClean.includes("đầu vào và đầu ra")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.dauVaoRa = tableData ? tableData.rows.map(r => ({
        input: r[0],
        output: r[1]
      })) : [];
    } 
    else if (titleClean.includes("bản đồ level nghề nghiệp")) {
      // Find the code block
      let codeBlock = "";
      let codeStarted = false;
      secLines.forEach(l => {
        if (l.trim().startsWith("```")) {
          if (codeStarted) codeStarted = false;
          else codeStarted = true;
        } else if (codeStarted) {
          codeBlock += l + "\n";
        }
      });
      structuredSections.banDoLevel = codeBlock.trim() || secLines.join('\n').trim();
    } 
    else if (titleClean.includes("so sánh level")) {
      const tableData = parseSectionTable(secLines);
      if (tableData) {
        structuredSections.soSanhLevel = {
          headers: tableData.headers,
          rows: tableData.rows.map(r => ({
            dimension: r[0],
            levels: r.slice(1)
          }))
        };
        // Extract level names
        role.levels = tableData.headers.slice(1);
      } else {
        structuredSections.soSanhLevel = null;
      }
    } 
    else if (titleClean.includes("năng lực cốt lõi")) {
      const tableData = parseSectionTable(secLines);
      if (tableData) {
        structuredSections.nangLucCotLoi = {
          headers: tableData.headers,
          rows: tableData.rows.map(r => ({
            category: r[0],
            levels: r.slice(1)
          }))
        };
      } else {
        structuredSections.nangLucCotLoi = null;
      }
    } 
    else if (titleClean.includes("dấu hiệu nhận biết")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.dauHieuNhanBiet = tableData ? tableData.rows.map(r => ({
        level: r[0],
        positive: r[1],
        negative: r[2]
      })) : [];
    } 
    else if (titleClean.includes("lên level") || titleClean.includes("muốn lên level tiếp theo")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.lenLevel = tableData ? tableData.rows.map(r => ({
        from: r[0],
        to: r[1],
        proof: r[2]
      })) : [];
    } 
    else if (titleClean.includes("lỗi phổ biến")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.loiPhoBien = tableData ? tableData.rows.map(r => ({
        error: r[0],
        fix: r[1]
      })) : [];
    } 
    else if (titleClean.includes("checklist")) {
      const tableData = parseSectionTable(secLines);
      structuredSections.checklist = tableData ? tableData.rows.map(r => ({
        question: r[0]
      })) : [];
    }
  }

  role.sections = structuredSections;
  return role;
}

function parseSectionTable(lines) {
  for (let idx = 0; idx < lines.length; idx++) {
    if (lines[idx].trim().startsWith('|')) {
      const { table } = parseTable(lines, idx);
      return table;
    }
  }
  return null;
}

function main() {
  console.log("Bắt đầu parse các tài liệu...");
  const profile = parseProfile();
  console.log("Đã parse xong profile R&D.");

  const files = fs.readdirSync(CAREER_DIR);
  const careerFiles = files
    .filter(f => f.endsWith('.md'))
    .sort();

  const roles = [];
  careerFiles.forEach(f => {
    const fullPath = path.join(CAREER_DIR, f);
    console.log(`Đang parse file: ${f}...`);
    const roleData = parseCareerLevel(fullPath);
    roles.push(roleData);
  });

  const fullData = {
    profile,
    roles
  };

  const outputJs = `// Dữ liệu được tạo tự động bởi parse.js. Không chỉnh sửa trực tiếp file này.
const lumiCareerData = ${JSON.stringify(fullData, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lumiCareerData;
}
`;

  fs.writeFileSync(OUTPUT_FILE, outputJs, 'utf8');
  console.log(`Đã ghi dữ liệu thành công vào ${OUTPUT_FILE}`);
}

main();
