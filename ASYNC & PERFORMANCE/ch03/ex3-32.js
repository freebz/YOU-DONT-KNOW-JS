// 1단계
request( "http://some.url.1/" )

// 2단계
.then( function(response1){
    foo.bar(); // 정의되지 않았으니 에러!

    // 실행되지 않는다.
    return request( "http://some.url.2/?v=" + response1 );
} )

// 3단계
.then(
    function fullfilled(response2){
	// 실행되지 않는다.
    },
    // 에러를 잡기 위한 버림 처리기
    function rejected(err){
	console.log( err );
	// 'foo.bar()'에서 'TypeError' 발생
	return 42;
    }
)

// 4단계
.then( function(msg){
    console.log( msg ); // 42
} );
