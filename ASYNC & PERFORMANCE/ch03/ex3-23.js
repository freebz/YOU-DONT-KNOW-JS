var p = {
    then: function(cb,errcb) {
	cb( 42 );
	errcb( "사악한 미소" );
    }
};


Promise.resolve( p )
.then(
    function fulfilled(val){
	console.log( val ); // 42
    },
    function rejected(err){
	// 실행되지 않는다.
    }
);
