// 'request( )'는 프라미스-인식형 유틸리티다.

function *foo(url) {

    // 상태 1
    try {
	console.log( "요청 중:", url );
	var TMP1 = yield request( url );

	// 상태 2
	var val = yield TMP1;
	console.log( val );
    }
    catch (err) {
	// 상태 3
	console.log( "에러:", err );
	return false;
    }
}
