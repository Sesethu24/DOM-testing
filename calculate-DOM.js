var billStringElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateBtnElement = document.querySelector(".calculateBtn");

  var amount = CalculateBtnClicked();
  
    calculateBtnElement.addEventListener('click', function(){
        amount.total();
        billTotalElement.innerHTML = amount.total();
    });
    calculateBtnElement.addEventListener('click', function(){
      amount.bill();
      billTotalElement.innerHTML = amount.bill();

      var roundedBillTotal = billTotalElement;
   
    if (amount.critical){
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
    }
    else if (amount.warning){
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    }   
    else{
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
    }
    billTotalElement.innerHTML = roundedBillTotal;   
    });
  

   calculateBtnElement.addEventListener('click', CalculateBtnClicked);