var rejectedTh = {
    then: function(resolved,rejected) {
	rejected( "허걱" );
    }
};

var rejectedPr = Promise.resolve( rejectedTh );
