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
  } else if (block.closest("#step-04")) {
    // step-04 is Claude Code only — no terminal equivalent
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

function applyFilter(content, method) {
  content.querySelectorAll(".method-block[data-method]").forEach((block) => {
    block.classList.toggle("method-hidden", block.dataset.method !== method);
  });
  const notice = content.querySelector(".method-filter-notice");
  if (!notice) return;
  const hasVisible = !!content.querySelector(`.method-block[data-method="${method}"]`);
  notice.classList.toggle("method-filter-notice--visible", !hasVisible);
}
