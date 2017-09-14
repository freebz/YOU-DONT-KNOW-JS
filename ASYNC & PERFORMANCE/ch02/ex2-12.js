function timeoutify(fn,delay) {
    var intv = setTimeout( function(){
	intv = null;
	fn( new Error( "타임아웃!" ) );
    }, delay );

    return function() {
	// 타임아웃은 아직인가?
	if (intv) {
	    clearTimeout( intv );
	    fn.apply( this, arguments );
	}
    };
}
