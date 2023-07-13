const showMoreBtn = document.querySelector(".comparsion__btn");
const comparisonBlock = document.querySelector(".comparsion__content");

const comparisonBlockMinHeight = 345;
const comparisonBlockMaxHeight =
  comparisonBlock.offsetHeight + comparisonBlockMinHeight;

comparisonBlock.style.maxHeight = comparisonBlockMinHeight + "px";

showMoreBtn.addEventListener("click", () => {
  setVisibleComparsion();
  showMoreBtn.classList.toggle("comparsion__btn--active");
});

function setVisibleComparsion() {
  comparisonBlock.classList.toggle("comparsion__content--hide");

  if (!comparisonBlock.classList.contains("comparsion__content--hide")) {
    comparisonBlock.style.maxHeight = comparisonBlockMaxHeight + "px";
  } else {
    comparisonBlock.style.maxHeight = comparisonBlockMinHeight + "px";
  }

  const thirdComparisonElem = document.querySelector(
    ".comparison__item:nth-child(3)"
  ).childNodes;

  thirdComparisonElem[1].classList.toggle("comparison__item--hide");
  thirdComparisonElem[3].classList.toggle("comparison__item-content--hide");

  for (let node of thirdComparisonElem[3].childNodes) {
    node.classList?.toggle("comparison__item--hide");
  }
}

// features

const featuresBtn = document.querySelector(".features__btn");
const featuresTextItem = Array.from(
  document.querySelectorAll(".features__text")
);
const featuresBox = document.querySelector(".features__box");

let featuresBoxMaxHeight = null;
const featuresBoxMinHeight = 0;

featuresBtn.addEventListener("click", () => {
  if (!featuresBoxMaxHeight) {
    featuresBoxMaxHeight = featuresTextItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (featuresBox.classList.contains("features__box--show")) {
    featuresBox.style.maxHeight = featuresBoxMinHeight + "px";
  } else {
    featuresBox.style.maxHeight = featuresBoxMaxHeight + "px";
  }

  featuresBtn.classList.toggle("features__btn--rotate");
  featuresBox.classList.toggle("features__box--show");
});

// advantages

const advantagesBtn = document.querySelector(".advantages__item--line-5");
const advantagesBlock = document.querySelector(".advantages__more-list");
const advantagesItem = Array.from(
  document.querySelectorAll(".advantages__more-item")
);

let advantagesBlockMaxHeight = null;
const advantagesBlockMinHeight = 0;

advantagesBlock.style.maxHeight = advantagesBlockMinHeight + "px";

advantagesBtn.addEventListener("click", () => {
  if (!advantagesBlockMaxHeight) {
    advantagesBlockMaxHeight = advantagesItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (advantagesBlock.classList.contains("advantages__more-list--hide")) {
    advantagesBlock.style.maxHeight = advantagesBlockMaxHeight + "px";
  } else {
    advantagesBlock.style.maxHeight = advantagesBlockMinHeight + "px";
  }
  advantagesBlock.classList.toggle("advantages__more-list--hide");
  advantagesBtn.classList.toggle("advantages__item-more--show");
});

// additional features

const additionalBtn = document.querySelector(".whitelabel__btn");
const additionalTextItem = Array.from(
  document.querySelectorAll(".additional__item")
);
const additionalBox = document.querySelector(".additional__list");

let additionalBoxMaxHeight = null;
const additionalBoxMinHeight = 0;

additionalBtn.addEventListener("click", () => {
  if (!additionalBoxMaxHeight) {
    additionalBoxMaxHeight = additionalTextItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (additionalBox.classList.contains("additional__list--hide")) {
    additionalBox.style.maxHeight = additionalBoxMaxHeight + "px";
  } else {
    additionalBox.style.maxHeight = additionalBoxMinHeight + "px";
  }

  additionalBox.classList.toggle("additional__list--hide");
  additionalBtn.classList.toggle("whitelabel__btn--show");
});

// slick slider

import "slick-carousel";
import $ from "jquery";

$(".features__slider").slick({
  dots: false,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: "linear",
  infinite: true,
});
