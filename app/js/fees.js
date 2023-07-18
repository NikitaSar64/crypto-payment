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

// fees

const showMoreBtn = document.querySelector(".withdrawal__btn");
const withdrawalBlock = document.querySelector(".withdrawal__content");
const withdrawalItemsHide = document.querySelectorAll(
  '.withdrawal__box-item[data-item="hide"]'
);

const withdrawalBlockMinHeight = 285 + "px";
let withdrawalBlockMaxHeight = withdrawalBlock.scrollHeight + 5 + "px";

withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight;

showMoreBtn.addEventListener("click", () => {
  setVisibleWithdrawal();
  showMoreBtn.classList.toggle("withdrawal__btn--active");
});

function setVisibleWithdrawal() {
  if (withdrawalBlock.style.maxHeight < withdrawalBlockMaxHeight) {
    withdrawalBlock.style.maxHeight = withdrawalBlockMaxHeight;
  } else {
    withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight;
  }

  for (let node of withdrawalItemsHide) {
    node.classList.toggle("withdrawal__box-item--border");
    Array.from(node.children).forEach((children) =>
      children.classList.toggle("withdrawal__box-item--hide")
    );
  }
}
