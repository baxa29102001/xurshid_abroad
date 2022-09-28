// BURGER MENU FUNCTION
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Universities slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 47,
  // centeredSlides: true,
  // fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// Second Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


});


