const docs = [
  {
    id: "profile",
    title: "Profile Phòng R&D Lumi",
    kind: "Tổng quan",
    path: "lumi-rd-profile.md",
    summary: "Bức tranh tổng thể về R&D Lumi, các team, luồng phối hợp và hệ sinh thái sản phẩm.",
  },
  {
    id: "thiet-ke",
    title: "Thiết Kế",
    kind: "Career Level",
    path: "lumi-rd-career-levels/01-thiet-ke.md",
    summary: "UI/UX, kiểu dáng công nghiệp, 3D, hình ảnh và handoff thiết kế.",
  },
  {
    id: "co-khi",
    title: "Cơ Khí",
    kind: "Career Level",
    path: "lumi-rd-career-levels/02-co-khi.md",
    summary: "Kết cấu, vỏ sản phẩm, DFM/DFA, khuôn, lắp ráp và sản xuất thực tế.",
  },
  {
    id: "hardware",
    title: "Thiết Kế Phần Cứng",
    kind: "Career Level",
    path: "lumi-rd-career-levels/03-thiet-ke-phan-cung.md",
    summary: "Sơ đồ nguyên lý, PCB, BOM, bring-up, kiểm thử và chuẩn phần cứng.",
  },
  {
    id: "firmware",
    title: "Firmware",
    kind: "Career Level",
    path: "lumi-rd-career-levels/04-firmware.md",
    summary: "MCU, giao thức kết nối, OTA, độ tin cậy, debug và tích hợp thiết bị.",
  },
  {
    id: "software",
    title: "Software",
    kind: "Career Level",
    path: "lumi-rd-career-levels/05-software.md",
    summary: "Linux, gateway, Rust, backend/cloud, API, reliability và platform.",
  },
  {
    id: "app",
    title: "App",
    kind: "Career Level",
    path: "lumi-rd-career-levels/06-app.md",
    summary: "Flutter, mobile, desktop, UX triển khai, API, state và release app.",
  },
  {
    id: "qa",
    title: "QA Tester",
    kind: "Career Level",
    path: "lumi-rd-career-levels/07-qa-tester.md",
    summary: "Test case, bug report, regression, tích hợp hệ thống và chất lượng release.",
  },
  {
    id: "pm",
    title: "PM - Quản Lý Dự Án",
    kind: "Career Level",
    path: "lumi-rd-career-levels/08-pm-quan-ly-du-an.md",
    summary: "Timeline, phạm vi, rủi ro, phụ thuộc, điều phối liên team và bàn giao.",
  },
  {
    id: "ba",
    title: "BA - Phân Tích Nghiệp Vụ",
    kind: "Career Level",
    path: "lumi-rd-career-levels/09-ba-phan-tich-nghiep-vu.md",
    summary: "Discovery, user story, use case, acceptance criteria và giảm hiểu sai yêu cầu.",
  },
];

const state = {
  activeId: new URLSearchParams(location.search).get("doc") || "profile",
  query: "",
  contents: new Map(),
};

const roleCards = document.querySelector("#roleCards");
const docTabs = document.querySelector("#docTabs");
const docContent = document.querySelector("#docContent");
const activeTitle = document.querySelector("#activeTitle");
const activeKind = document.querySelector("#activeKind");
const sourceLink = document.querySelector("#sourceLink");
const searchInput = document.querySelector("#globalSearch");
const searchSummary = document.querySelector("#searchSummary");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function renderTable(lines, start) {
  const rows = [];
  let i = start;

  while (i < lines.length && lines[i].trim().startsWith("|")) {
    rows.push(lines[i].trim());
    i += 1;
  }

  const header = rows[0].split("|").slice(1, -1).map((cell) => inlineMarkdown(cell.trim()));
  const body = rows.slice(2).map((row) => row.split("|").slice(1, -1).map((cell) => inlineMarkdown(cell.trim())));
  const html = [
    "<table>",
    `<thead><tr>${header.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>`,
    `<tbody>${body.map((cells) => `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`,
    "</table>",
  ].join("");

  return { html, next: i };
}

function renderList(lines, start) {
  const ordered = /^\d+\.\s+/.test(lines[start].trim());
  const tag = ordered ? "ol" : "ul";
  const items = [];
  let i = start;

  while (i < lines.length) {
    const line = lines[i].trim();
    const match = ordered ? line.match(/^\d+\.\s+(.*)$/) : line.match(/^-\s+(.*)$/);
    if (!match) break;
    items.push(`<li>${inlineMarkdown(match[1])}</li>`);
    i += 1;
  }

  return { html: `<${tag}>${items.join("")}</${tag}>`, next: i };
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let i = 0;
  let inCode = false;
  let codeLines = [];

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (line.startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      i += 1;
      continue;
    }

    if (inCode) {
      codeLines.push(raw);
      i += 1;
      continue;
    }

    if (!line) {
      i += 1;
      continue;
    }

    if (line.startsWith("|") && lines[i + 1]?.trim().startsWith("|---")) {
      const table = renderTable(lines, i);
      html.push(table.html);
      i = table.next;
      continue;
    }

    if (/^#{1,4}\s+/.test(line)) {
      const depth = line.match(/^#+/)[0].length;
      const text = line.replace(/^#{1,4}\s+/, "");
      html.push(`<h${depth}>${inlineMarkdown(text)}</h${depth}>`);
      i += 1;
      continue;
    }

    if (line.startsWith("- ") || /^\d+\.\s+/.test(line)) {
      const list = renderList(lines, i);
      html.push(list.html);
      i = list.next;
      continue;
    }

    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,4}\s+/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("- ") &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("```")
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function highlight(html, query) {
  if (!query) return html;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`(${safe})`, "gi"), "<mark>$1</mark>");
}

async function loadDoc(doc) {
  if (state.contents.has(doc.id)) return state.contents.get(doc.id);
  const response = await fetch(doc.path);
  if (!response.ok) throw new Error(`Không tải được ${doc.path}`);
  const text = await response.text();
  state.contents.set(doc.id, text);
  return text;
}

function setActive(docId) {
  state.activeId = docId;
  const url = new URL(location.href);
  url.searchParams.set("doc", docId);
  history.replaceState(null, "", url);
  render();
  document.querySelector("#compare").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCards() {
  roleCards.innerHTML = docs
    .filter((doc) => doc.id !== "profile")
    .map(
      (doc, index) => `
        <button class="role-card ${doc.id === state.activeId ? "active" : ""}" data-doc="${doc.id}">
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${doc.title}</h3>
          <p>${doc.summary}</p>
          <span class="tag">${doc.kind}</span>
        </button>
      `,
    )
    .join("");

  roleCards.querySelectorAll("[data-doc]").forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.doc));
  });
}

function renderTabs() {
  docTabs.innerHTML = docs
    .map(
      (doc) => `
        <button class="doc-tab ${doc.id === state.activeId ? "active" : ""}" data-doc="${doc.id}">
          ${doc.title}
        </button>
      `,
    )
    .join("");

  docTabs.querySelectorAll("[data-doc]").forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.doc));
  });
}

async function render() {
  const doc = docs.find((item) => item.id === state.activeId) || docs[0];
  activeTitle.textContent = doc.title;
  activeKind.textContent = doc.kind;
  sourceLink.href = doc.path;
  renderCards();
  renderTabs();

  try {
    const markdown = await loadDoc(doc);
    const rendered = renderMarkdown(markdown);
    docContent.innerHTML = highlight(rendered, state.query);

    if (state.query) {
      const count = (markdown.match(new RegExp(state.query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
      searchSummary.hidden = false;
      searchSummary.textContent = count
        ? `Tìm thấy ${count} kết quả trong tài liệu đang mở.`
        : "Không thấy kết quả trong tài liệu đang mở. Chọn vị trí khác ở mục Truy xuất để kiểm tra tiếp.";
    } else {
      searchSummary.hidden = true;
    }
  } catch (error) {
    docContent.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
});

render();
