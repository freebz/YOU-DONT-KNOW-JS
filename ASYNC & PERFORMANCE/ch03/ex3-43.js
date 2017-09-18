var p = Promise.resolve( 42 );

p.then(
    function fulfilled(msg){
	// 숫자에는 문자열 함수가 없으니
	// 에러를 던질 것이다.
	console.log( msg.toLowerCase() );
    },
    function rejected(err){
	// 실행되지 않는다.
    }
);
