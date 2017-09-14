var res = [];

// AJAX 호출 결과 'response( )'는 배열을 받는다.
function response(data) {
    // 기존 'res' 배열에 추가한다.
    res = res.concat(
	// 배열의 원소를 하나씩 변환한다.
	// 원래 값을 2배로 늘린다.
	data.map( function(val){
	    return val * 2;
	} )
    );
}

// ajax( )는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
