const navbarEl = document.querySelector(".nav-bar");
window.onscroll = () => {
  if (window.scrollY > 300) {
    navbarEl.classList.add("nav-colored");
  } else {
    navbarEl.classList.remove("nav-colored");
  }
};
