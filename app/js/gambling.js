import "slick-carousel";
import $ from "jquery";

// tools slider

$(".gambling__slider").slick({
  dots: true,
  arrows: false,
  draggable: false,
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
});

// reviews slider

$(".reviews__slider").slick({
  dots: true,
  arrows: false,
  draggable: true,
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
