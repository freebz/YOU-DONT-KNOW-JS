var p = Promise.resolve( 42 );

p.then(
    function fulfilled(msg){
	// 숫자에 문자열 함수가 없으니
	// 에러가 날 것이다.
	console.log( msg.toLowerCase() );
    }
)
.catch( handleErrors );
