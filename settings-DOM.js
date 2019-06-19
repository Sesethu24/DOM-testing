var radioButton = document.querySelector(".billItemTypeWithSettings");
var settingsButton = document.querySelector(".settingsAddBtn");
var costCalls = document.querySelector(".callTotalSettings");
var costSms = document.querySelector(".smsTotalSettings");
var costSettings = document.querySelector(".totalSettings");

var callsElement = document.querySelector(".callCostSetting");
var smsElement = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
var updateSettingsBtn = document.querySelector(".updateSettings");


var price = SettingsBill();

function AddFunction(){
   price.getTotalCost(settingsButton.value);
//     if(!(totalCost >= criticalLev)){
//     settingsButton = document.querySelector("input[name='radioButton']:checked");
//     if (settingsButton){
//          radioButton = settingsButton.value }
//     if (radioButton === "call"){
//         Calls += callElement;}
//     else if (radioButton === "sms"){
//         Sms += SmssElement;}
//     costCalls.innerHTML = Calls.toFixed(2);
//     costSms.innerHTML = Sms.toFixed(2);
//      totalCost = Calls + Sms;
//     costSettings.innerHTML = totalCost.toFixed(2); 
    if (price.totalCost() >= criticalPoint){
        costSettings.classList.add("danger");
        costSettings.classList.remove("warning");
    }
    else if (price.totalCost() >= warningPoint){
        costSettings.classList.add("warning");
        costSettings.classList.remove("danger");
    }
}
settingsButton.addEventListener('click', AddFunction);
    
 function UpdateButton()
 {
     price.getTotalCost(updateSettingsBtn.value);
    // callElement = Number(callsElement.value);
    // SmssElement = Number(smsElement.value);
    // warningLev = Number(warningLevel.value);
    // criticalLev = Number(criticalLevel.value);
   if (price.totalCost() >= criticalPoint){
        
        costSettings.classList.add("danger");
        costSettings.classList.remove("warning");
    }
    else if (price.totalCost() >= warningPoint){
        costSettings.classList.add("warning");
        costSettings.classList.remove("danger");
    }
    if (price.totalCost() < warningPoint){
        costSettings.classList.remove("warning");
        costSettings.classList.remove("danger");
    }
    if (criticalPoint < price.totalCost() ){
        costSettings.classList.remove("warning");
        costSettings.classList.remove("danger");
    }
 }
 updateSettingsBtn.addEventListener('click', UpdateButton);