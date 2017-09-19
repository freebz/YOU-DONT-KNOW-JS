// 'request( )'는 프라미스-인식형 유틸리티다.

function *foo(url) {
    try {
	console.log( "요청 중:", url );
	var val = yield request( url );
	console.log( val );
    }
    catch (err) {
	console.log( "에러:", err );
	return false;
    }
}

var it = foo( "http://some.url.1" );
