// 'request( )'는 프라미스-인식형 유틸리티다.

function foo(url) {
    // 제너레이터 상태를 관리
    var state;

    // 제너레이터 스코프 변수 선언
    var val;

    function process(v) {
	switch (state) {
	case 1:
	    console.log( "요청 중:", url );
	    return rquest( url );
	case 2:
	    val = v;
	    console.log( val );
	    return;
	case 3:
	    var err = v;
	    console.log( "에러:", err );
	    return false;
	}
    }

    // ...
}
