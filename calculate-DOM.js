var billStringElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateBtnElement = document.querySelector(".calculateBtn");


var amount = CalculateBtnClicked();


function calculateBtn() {
  amount.total(billStringElement.value);

  billTotalElement.classList.remove("danger");
  billTotalElement.classList.remove("warning");



  if (amount.critical() === "danger") {
    billTotalElement.classList.add("danger")
    billTotalElement.classList.remove("warning");
  }
  else if (amount.warning() === "warning") {
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");
  }

}


calculateBtnElement.addEventListener('click', calculateBtn);