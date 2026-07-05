document.querySelectorAll(".step-card.collapsible").forEach((card) => {
  const toggle = card.querySelector(".step-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
});
