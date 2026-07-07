document.querySelectorAll(".step-card.collapsible").forEach((card) => {
  const toggle = card.querySelector(".step-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
});

function applyExtFilter(filter) {
  const proNotice = document.getElementById("ext-pro-notice");
  if (proNotice) proNotice.style.display = filter === "vscode-pro" ? "" : "none";

  document.querySelectorAll(".ext-card").forEach((card) => {
    card.style.display = card.dataset.category === filter ? "" : "none";
  });
}

// Apply default filter on load
applyExtFilter("essential");

document.querySelectorAll(".ext-filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".ext-filter-tab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    applyExtFilter(tab.dataset.filter);
  });
});
