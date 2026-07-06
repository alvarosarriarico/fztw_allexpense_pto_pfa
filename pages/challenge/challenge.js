// Single looping background clip (beach). Autoplays where allowed; otherwise
// starts on the first interaction or when the tab becomes visible.
const video = document.getElementById("challenge-video");

if (video) {
  video.muted = true; // required for autoplay

  const tryPlay = () => {
    const played = video.play();
    if (played && played.catch) played.catch(() => {});
  };

  tryPlay();

  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) =>
    window.addEventListener(ev, tryPlay, { passive: true })
  );
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
}

// Collapsible phases — each folds open to reveal its numbered sub-steps
document.querySelectorAll(".challenge-phase.collapsible").forEach((phase) => {
  const toggle = phase.querySelector(".phase-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const open = phase.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
});
