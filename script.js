window.addEventListener(
  "scroll",
  () => {
    document
      .getElementById("header")
      .classList.toggle("elevated", window.scrollY > 0);
  },
  { passive: true },
);
