var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    loop: true,
  },
});

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
