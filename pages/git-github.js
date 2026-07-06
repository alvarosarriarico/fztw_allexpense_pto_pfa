document.querySelectorAll(".step-card.collapsible").forEach((card) => {
  const toggle = card.querySelector(".step-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
});

// Auto-tag method blocks based on header text
document.querySelectorAll(".method-block").forEach((block) => {
  const header = block.querySelector(".method-header");
  if (!header) return;
  const text = header.textContent;
  if (text.includes("Claude Code")) {
    block.dataset.method = "claude";
  } else if (text.includes("PowerShell") || text.includes("GitHub directly")) {
    block.dataset.method = "terminal";
  } else if (block.closest("#step-08")) {
    // step-08 is Claude Code only — no terminal equivalent
    block.dataset.method = "claude";
  }
});

// Inject filter toggles into step-contents that have filterable blocks
document.querySelectorAll(".step-content").forEach((content) => {
  if (!content.querySelector(".method-block[data-method]")) return;

  const filter = document.createElement("div");
  filter.className = "method-filter";
  filter.innerHTML =
    '<button class="method-filter-btn active" data-filter="claude" aria-pressed="true">Claude Code</button>' +
    '<button class="method-filter-btn" data-filter="terminal" aria-pressed="false">Terminal</button>';

  const notice = document.createElement("div");
  notice.className = "method-filter-notice";
  notice.textContent = "No terminal equivalent for this step — use the Claude Code approach.";

  const intro = content.querySelector(".exercise-intro");
  if (intro) {
    intro.after(filter);
    filter.after(notice);
  } else {
    content.prepend(notice);
    content.prepend(filter);
  }

  applyFilter(content, "claude");

  filter.querySelectorAll(".method-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter.querySelectorAll(".method-filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      applyFilter(content, btn.dataset.filter);
    });
  });
});

// Inject copy-to-clipboard buttons into all cmd-blocks
const ICON_COPY =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>' +
  '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>' +
  '</svg>';
const ICON_CHECK =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<polyline points="20 6 9 17 4 12"></polyline>' +
  '</svg>';

document.querySelectorAll(".cmd-block").forEach((block) => {
  const copyText = block.textContent.trim();
  const btn = document.createElement("button");
  btn.className = "cmd-copy-btn";
  btn.setAttribute("aria-label", "Copy to clipboard");
  btn.innerHTML = ICON_COPY;
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText).then(() => {
      btn.innerHTML = ICON_CHECK;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = ICON_COPY;
        btn.classList.remove("copied");
      }, 1800);
    });
  });
  block.appendChild(btn);
});

function applyFilter(content, method) {
  content.querySelectorAll(".method-block[data-method]").forEach((block) => {
    block.classList.toggle("method-hidden", block.dataset.method !== method);
  });
  const notice = content.querySelector(".method-filter-notice");
  if (!notice) return;
  const hasVisible = !!content.querySelector(`.method-block[data-method="${method}"]`);
  notice.classList.toggle("method-filter-notice--visible", !hasVisible);
}
