describe('calculate bill function', function(){

    it('should calculate the total phone bill for sms', function(){
        var sbuda = CalculateBtnClicked();
        sbuda.total("sms");
        assert.equal(sbuda.bill(), 'R0.75');
    });
    it('should calculate the total phone bill for calls', function(){
        var tot = CalculateBtnClicked();
        tot.total("call");
        assert.equal(tot.bill(), 'R2.75');
    });
    it('should return the right amount if two calls and one sms is made', function(){
        var totalBill = CalculateBtnClicked();
        totalBill.total('sms');
        totalBill.total('call');
        totalBill.total('call');
        assert.equal(totalBill.bill(), 'R6.25');
    });
    it('should show warning level if total exceeds R20', function(){
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
        assert.equal(totalBill.warning(), true);
    });
    it('should show critical level if the total bill exceeds R30', function(){
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
        assert.equal(totalBill.critical(), true);
    });
    it('should return R0.00 if no calls or sms is made', function(){
        var totalBill = CalculateBtnClicked();
        assert.equal(totalBill.bill(), 'R0.00');
    });
});
