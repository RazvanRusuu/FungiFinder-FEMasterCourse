function init() {
  let toggleNav = document.querySelector('[aria-controls="primary-nav"]');
  let nav = document.querySelector("#primary-nav");

  toggleNav.addEventListener("click", () => {
    const navOpen = toggleNav.getAttribute("aria-expanded");
    if (navOpen == "true") {
      toggleNav.setAttribute("aria-expanded", "false");
    } else {
      toggleNav.setAttribute("aria-expanded", "true");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
