function SettingsBill(){

    var sett = 0;
    var call = 0;
    var sms = 0;

    var smsElement = 0;
    

    function Settings(type){
       
  if (type === "call"){
       call += callElement;
   }
   else if (type === "sms"){
       sms += smsElement;
   }
}
          function AddBtn(){
            return sett;
          }
    
 function CriticalLev(){
     return sett >= 50;
           
 }
 function WarningLev(){
     return sett >= 30;
 }

return{
    setting: Settings,
    totals: AddBtn,
    critic: CriticalLev,
    warn: WarningLev
  
      }
}