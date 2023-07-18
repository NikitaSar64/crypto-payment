import "slick-carousel";
import $ from "jquery";

// mobile menu

const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".burger-menu-overlay");
const burgerMenuClose = document.querySelector(".mobile-menu__btn-close");
const mobileBtns = document.querySelectorAll(".mobile-menu__item-link");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu--open");
  burgerMenu.style.maxHeight = "100vh";
  document.body.style.overflow = "hidden";
});

burgerMenuClose.addEventListener("click", (e) => {
  e.stopPropagation();
  burgerMenu.style.maxHeight = "0vh";
  mobileMenu.classList.remove("mobile-menu--open");
  document.body.style.overflow = "auto";
});

mobileBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    burgerMenuClose.click();
  })
);

// tools slider

$(".gambling__slider").slick({
  dots: true,
  arrows: false,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        dots: false,
      },
    },
  ],
});

$(".invoices").on("click", () => {
  $(".gambling__slider").slick("slickGoTo", 0);

  changeActiveBtn(0);
});

$(".exchange").on("click", () => {
  $(".gambling__slider").slick("slickGoTo", 1);

  changeActiveBtn(1);
});

$(".solutions").on("click", () => {
  $(".gambling__slider").slick("slickGoTo", 2);

  changeActiveBtn(2);
});

const btns = Array.from(document.querySelectorAll(".gambling__slider-btn"));

function changeActiveBtn(slideIndex) {
  btns.forEach((btn, index) => {
    if (slideIndex == index) {
      btn.classList.add("gambling__slider-btn--active");
    } else {
      btn.classList.remove("gambling__slider-btn--active");
    }
  });
}

// media slider

$(".media__slider").slick({
  dots: true,
  arrows: false,
  draggable: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// reviews slider

$(".reviews__slider").slick({
  dots: true,
  arrows: false,
  draggable: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// faq

const accordions = document.querySelectorAll(".accordion");

Array.from(accordions).forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("accordion--active");

    const panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
