const tabs = document.querySelectorAll(".filter-tab");
const sections = document.querySelectorAll(".resource-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    sections.forEach((section) => {
      const visible = filter === "all" || section.dataset.category === filter;
      section.style.display = visible ? "" : "none";
    });
  });
});
