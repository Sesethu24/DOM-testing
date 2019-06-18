function SettingsBill(){

    var callCost = 0;
    var smsCost = 0;
    var totalCost = 0;
    var criticalPoint = 0;
    var warningPoint = 0;

    function setCallCost(amount){
        callCost += amount;
    }
    function getCallCost(){
        return callCost;
    }
    function setSmsCost(amount){
        smsCost += amount;
    }
    function getSmsCost(){
        return smsCost;
    }
    function setTotalCost(){
        totalCost = smsCost + callCost;
    }
    function getTotalCost(){
    return totalCost;
}
    function setCriticalPoint(amount){
        criticalPoint += amount;
    }
    function getCriticalPoint(){
        return criticalPoint;
    }
    function setWarningPoint(amount){
      warningPoint += amount;
    }
     function getWarningPoint(){
         return warningPoint;
     }
return {
      setCallCost,
      getCallCost,
      setSmsCost,
      getSmsCost,
      setTotalCost,
      getTotalCost,
      setCriticalPoint,
      getCriticalPoint,
      getWarningPoint,
      setWarningPoint
}
}