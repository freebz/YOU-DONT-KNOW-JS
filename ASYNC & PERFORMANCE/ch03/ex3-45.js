var p = Promise.resolve( 42 );

p.then(
    function fulfilled(msg){
	// 숫자에 문자열 함수가 없으니
	// 에러가 날 것이다.
	console.log( msg.toLowerCase() );
    }
)
.done( null, handleErrors );

// 'handleErrors( )'에서 예외가 발생하면
// 여기서 전역적으로 던진다.
