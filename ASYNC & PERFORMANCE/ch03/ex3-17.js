var p = new Promise( function(resolve,reject){
    foo.bar(); // 'foo'는 정의된 바 없으니 에러가 난다!
    resolve( 42 ); // 실행되지 않는다.
} );

p.then(
    function fulfilled(){
	// 실행되지 않는다.
    },
    function rejected(err){
	// 'foo.bar()' 줄에서 에러가 나므로
	// 'err'는 'TypeError' 예외 객체일 것이다.
    }
);
