describe('Settings Bill function', function(){

    it('should take any amount entered, calculate it and give the total phone bill for sms', function(){
        var funct = SettingsBill();
        funct.totals(3)
        funct.setting("sms");

        assert.equal(funct.totals(), 0);
    }); 

});