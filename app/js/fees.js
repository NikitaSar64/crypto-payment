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
