const burger = document.getElementsByClassName("burger")[0];
const ul = document.getElementsByClassName("ul")[0];
const list = document.getElementsByClassName("list");

burger.addEventListener("click", () => {
  burger.classList.toggle("burgerActive");
  ul.classList.toggle("ulActive");
});

for (let i = 0; i < list.length; i++) {
  const element = list[i];
  element.addEventListener("click", () => {
    burger.classList.remove("burgerActive");
    ul.classList.remove("ulActive");
  });
}

const listDropDown = document.getElementsByClassName("listDropDown")[0];
const dropDown = document.getElementsByClassName("dropDown")[0];

listDropDown.addEventListener("click", () => [
  dropDown.classList.toggle("dropDownActive"),
]);

const swiper = new Swiper(".courseSwiper", {
  speed: 400,
  spaceBetween: 100,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
  },
});

AOS.init();

window.addEventListener("scroll", function () {
  var component = document.getElementsByClassName("nav")[0];
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // Adjust the value as needed
    component.classList.add("headerFixed");
  } else {
    component.classList.remove("headerFixed");
  }
});

const swiper2 = new Swiper(".preCourseSwiper", {
  speed: 400,
  spaceBetween: 100,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  grabCursor: true,
  // navigation: {
  //   nextEl: ".swiper-button-next1",
  //   prevEl: ".swiper-button-prev1",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  },
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Example usage:
const element = document.getElementsByClassName("topButton")[0];
element.addEventListener("click", scrollToTop);
