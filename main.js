const inputPrice = document.getElementById("price");
const inputPeople = document.getElementById("people");
const inputTip = document.getElementById("tip");
const btn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const spanCost = document.querySelector(".cost");
const pError = document.querySelector(".error");

const checkInputs = () => {
  if (
    inputPrice.value == "" ||
    inputPeople.value == "" ||
    inputTip.value == 0
  ) {
    pError.textContent = "Uzupełnij wszystkie pola!";
    costInfo.style.display = "none";
  } else {
    pError.textContent = "";
    countBill();
    inputPrice.value = "";
    inputPeople.value = "";
    inputTip.value = 0;
  }
};

const countBill = () => {
  const price = parseFloat(inputPrice.value);
  const people = parseInt(inputPeople.value);
  const tip = parseFloat(inputTip.value);

  console.log(typeof tip);
  const sum = (price + price * tip) / people;
  console.log(sum);
  costInfo.style.display = "block";

  spanCost.textContent = sum.toFixed(2);
};

btn.addEventListener("click", checkInputs);
