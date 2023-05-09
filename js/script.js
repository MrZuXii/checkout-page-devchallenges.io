const item1Buttons = document.querySelectorAll(".checkout__amount-btn.item-1");
const item1Amount = document.querySelector(".checkout__amount-num.item-1");

const item2Buttons = document.querySelectorAll(".checkout__amount-btn.item-2");
const item2Amount = document.querySelector(".checkout__amount-num.item-2");
const totalEl = document.querySelector(".total");

const totalCalc = () => {
  const sum = item1Amount.value * 54.99 + item2Amount.value * 74.99;
  console.log(sum);
  totalEl.textContent = `$${(sum + 19).toFixed(2)}`;
};

item1Buttons[0].addEventListener("click", () => {
  if (item1Amount.value > 0) item1Amount.value--;
  totalCalc();
});

item1Buttons[1].addEventListener("click", () => {
  item1Amount.value++;
  totalCalc();
});

item2Buttons[0].addEventListener("click", () => {
  if (item2Amount.value > 0) item2Amount.value--;
  totalCalc();
});

item2Buttons[1].addEventListener("click", () => {
  item2Amount.value++;
  totalCalc();
});

// POPUP

const form = document.querySelector("form");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup__btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  popup.classList.add("active");
  popupBtn.addEventListener("click", () => {
    window.location.reload();
  });
});
