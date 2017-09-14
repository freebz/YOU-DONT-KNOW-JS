// "에러 우선 스타일" 콜백 디자인
function foo(err,data) {
    if (err) {
	console.error( err );
    }
    else {
	console.log( data );
    }
}

ajax( "http://some.url.1", timeoutify( foo, 500 ) );
