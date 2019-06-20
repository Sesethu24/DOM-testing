describe('calculate bill function', function(){

    it('should calculate the total phone bill for sms', function(){
        var calc = CalculateBtnClicked();
        calc.total("sms");
        assert.equal(calc.bill(), '0.75');
    });
    it('should calculate the total phone bill for calls', function(){
        var tot = CalculateBtnClicked();
        tot.total("call");
        assert.equal(tot.bill(), '2.75');
    });
    it('should return the right amount if two calls and one sms is made', function(){
        var totalBill = CalculateBtnClicked();
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        assert.equal(totalBill.bill(), '6.25');
    });
    it('should show warning level if total exceeds R20 and reaches warning level', function(){
        var totalBill = CalculateBtnClicked();
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('call');
        assert.equal(totalBill.warning(),"warning");
    });
    it('should show danger if the total bill exceeds R30 and reaches the critical level', function(){
        var totalBill = CalculateBtnClicked();
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        assert.equal(totalBill.critical(), "danger");
    });
    it('should return R0.00 if no calls or sms is made', function(){
        var totalBill = CalculateBtnClicked();
        assert.equal(totalBill.bill(), '0.00');
    });
});
