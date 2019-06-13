function CalculateBtnClicked(){

    var totalBill = 0;

    function Calculate(param){
       if(param === "call"){
         totalBill += 2.75;
       }else if(param === "sms"){
         totalBill += 0.75;
       }
    }
    function Billtotal(){
      return "R" + totalBill.toFixed(2);
    }

    function CriticalLevel(){
       return totalBill >= 30;
    }
    function WarningLevel(){
      return totalBill >= 20;
    }
    return{
      total: Calculate,
      bill: Billtotal, 
      critical: CriticalLevel,
      warning: WarningLevel    
    }
    

}
