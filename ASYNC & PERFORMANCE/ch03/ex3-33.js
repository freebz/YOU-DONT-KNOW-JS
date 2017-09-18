var p = new Promise( function(resolve,reject){
    reject( "허걱" );
} );

var p2 = p.then(
    function fulfilled(){
	// 실행되지 않는다.
    }
    // 버림 처리기가 생략되거나 함수 아닌 다른 값이 전달되면
    // 다음과 같은 버림 처리기가 있다고 가정하여 처리한다.
    // function(err) {
    // throw err;
    // }
);
