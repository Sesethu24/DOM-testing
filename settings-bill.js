function SettingsBill(){

    var sett = 0;
    // var calcu = 0;

    function Settings(type){
       
        if(type === "call"){
            sett += 2.75;
          }else if(type === "sms"){
            sett += 0.75;
          }
          function TotalAmount(){

            return "R" + sett.toFixed(2);
          }
          function AddBtn(){
           
          }
    }
 function CriticalLev(){
     return sett >= 50;
           
 }
 function WarningLev(){
     return sett >= 30;
 }

return{
    setting: Settings,
    totals: TotalAmount,
    critic: CriticalLev,
    warn: WarningLev
}
}