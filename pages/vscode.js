document.querySelectorAll(".step-card.collapsible").forEach((card) => {
  const toggle = card.querySelector(".step-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
});

document.querySelectorAll(".ext-filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    document.querySelectorAll(".ext-filter-tab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    document.querySelectorAll(".ext-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.style.display = visible ? "" : "none";
    });
  });
});
