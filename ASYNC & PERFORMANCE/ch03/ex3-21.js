var p = {
    then: function(cb) {
	cb( 42 );
    }
};

// 아주 운이 좋으면 잘 작동하겠지!
p
.then(
    function fulfilled(val){
	console.log( val ); // 42
    },
    function rejected(err){
	// 실행되지 않는다.
    }
);
