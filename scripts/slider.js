new Swiper(".firstSwiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper = new Swiper(".secondSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  spaceBetween: 0,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
