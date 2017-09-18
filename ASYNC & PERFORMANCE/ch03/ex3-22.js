var p = {
    then: function(cb,errcb) {
	cb( 42 );
	errcb( "사악한 미소" );
    }
};

// 아주 운이 좋으면 잘 작동하겠지!
p
.then(
    function fulfilled(val){
	console.log( val ); // 42
    },
    function rejected(err){
	// 어랏, 실행되면 안 되는데...
	console.log( err ); // 사악한 미소
    }
);
