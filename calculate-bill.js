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
      return totalBill.toFixed(2);
    }

    function CriticalLevel(){
      if(totalBill >= 30){
        
      }
      return "danger";
    }
    function WarningLevel(){
      if(totalBill >= 20){

      }
      return "warning";
    }
    
    return{
      total: Calculate,
      bill: Billtotal, 
      critical: CriticalLevel,
      warning: WarningLevel    
    }
    
}
