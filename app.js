const discountItems = document.querySelectorAll(".discount__list li");
const discountButtons = document.querySelectorAll(".discount__btns button");

let order = 0;

discountButtons[1].addEventListener("click", () => {
  if (discountItems.length - 1 > order) {
    order++;
    discountItems.forEach((item, index) => {
      item.style.transform = `translate(-${order}00%)`;
    });
  }
});

discountButtons[0].addEventListener("click", () => {
  if (order > 0) {
    order--;
    discountItems.forEach((item, index) => {
      item.style.transform = `translate(-${order}00%)`;
    });
  }
});
