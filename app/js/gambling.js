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
