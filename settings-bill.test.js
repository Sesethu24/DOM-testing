describe('Settings Bill function', function(){

    it('should take any amount entered, calculate it and give the total phone bill for a call', function(){
        var totalPrice = SettingsBill();
        totalPrice.setCallCost(3)
        assert.equal(totalPrice.getCallCost(), 3);
    }); 
    it('should take any amount entered, calculate it and give the total phone bill for an sms', function(){
        var totalPrice = SettingsBill();
        totalPrice.setSmsCost(5)
        assert.equal(totalPrice.getSmsCost(), 5);
    }); 
    it('should show a warning colour when the total gets to warning level', function(){
        var totalPrice = SettingsBill();
        totalPrice.setWarningPoint(20)
        assert.equal(totalPrice.getWarningPoint(), "warning");
    }); 
    it('should show danger when the total gets to critical level', function(){
        var totalPrice = SettingsBill();
        totalPrice.setCriticalPoint(30.00)
        assert.equal(totalPrice.getCriticalPoint(), "danger");
    }); 

});