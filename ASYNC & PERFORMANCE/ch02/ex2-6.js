var tracked = false;

analytics.trackPurchase( purchaseData, function(){
    if (!tracked) {
	tracted = true;
	chargeCreditCard();
	displayThankyouPage();
    }
} );
