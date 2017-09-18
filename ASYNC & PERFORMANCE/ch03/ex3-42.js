var p = Promise.reject( "허걱" );

p.then(
    function fulfilled(){
	// 실행되지 않는다.
    },
    function rejected(err){
	console.log( err ); // "허걱"
    }
);
