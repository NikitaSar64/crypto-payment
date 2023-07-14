// fees

const showMoreBtn = document.querySelector(".withdrawal__btn");
const withdrawalBlock = document.querySelector(".withdrawal__content");
const withdrawalItems = Array.from(
  document.querySelector(".withdrawal__box").children
);
const withdrawalItemsHide = document.querySelectorAll(
  '.withdrawal__box-item[data-item="hide"]'
);

const withdrawalBlockMinHeight = 285;
let withdrawalBlockMaxHeight = null;

withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight + "px";

showMoreBtn.addEventListener("click", () => {
  setVisibleComparsion();
  showMoreBtn.classList.toggle("withdrawal__btn--active");
});

function setVisibleComparsion() {
  if (!withdrawalBlockMaxHeight) {
    withdrawalBlockMaxHeight = withdrawalItems.reduce(
      (prev, acum) => (prev += acum.offsetHeight + 15),
      0
    );
  }

  if (withdrawalBlock.classList.contains("withdrawal__content--hide")) {
    withdrawalBlock.style.maxHeight = withdrawalBlockMaxHeight + "px";
  } else {
    withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight + "px";
  }

  withdrawalBlock.classList.toggle("withdrawal__content--hide");

  for (let node of withdrawalItemsHide) {
    node.classList.toggle("withdrawal__box-item--border");
    Array.from(node.children).forEach((children) =>
      children.classList.toggle("withdrawal__box-item--hide")
    );
  }
}
