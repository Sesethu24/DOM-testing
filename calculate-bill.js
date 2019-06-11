function calculateBtnClicked(){

    var totalBill = 0;

    function calculate(param){
       if(param === "call"){
         totalBill += 2.75;
       }else if(param === "sms"){
         totalBill += 0.75;
       }
    }
    function Billtotal(){
      return "R" + totalBill.toFixed(2);
    }

    function criticalLevel(){
       return totalBill >= 30;
    }
    function warningLevel(){
      return totalBill >= 20;
    }
    return{
      total: calculate,
      bill: Billtotal, 
      critical: criticalLevel,
      warning: warningLevel    
    }
    

}
