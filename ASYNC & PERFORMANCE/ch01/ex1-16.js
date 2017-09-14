var res = [];

// 'response()'는 AJAX 호출 결과로 배열을 받는다.
function response(data) {
    // 한번에 1,000개씩 실행하자.
    var chunk = data.splice( 0, 1000 );

    // 기존 'res' 배열에 추가한다.
    res = res.concat(
	// 배열의 원소를 하나씩 변환한다.
	// 'chunk'값에 2를 곱한다.
	chunk.map( function(val){
	    return val * 2;
	} )
    );

    // 아직도 처리할 프로세스가 남아 있나?
    if (data.length > 0 ) {
	// 다음 배치를 비동기 스케줄링한다.
	setTimeout( function() {
	    response( data );
	}, 0 );
    }
}

// ajax( )는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
