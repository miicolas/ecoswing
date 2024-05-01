var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    loop: true,
  },
});

const backgroundNav = document.querySelector(".background_responsive");
const nav = document.querySelector(".navbar_responsive");
const burgerMenu = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".close-icon");

console.log(burgerMenu);
console.log(closeIcon);
console.log(backgroundNav);
console.log(nav);

burgerMenu.addEventListener("click", () => {
  console.log("clicked");
  backgroundNav.style.display = "block";
  burgerMenu.style.display = "none";
  nav.style.display = "flex";
  closeIcon.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  backgroundNav.style.display = "none";
  closeIcon.style.display = "none";
  nav.style.display = "none";
  burgerMenu.style.display = "block";
});
