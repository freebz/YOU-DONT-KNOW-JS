function *steps(token) {
    // 1단계
    var resp = yield request( token.messages[0].url );

    // 2단계
    var rvals = yield ASQ().gete(
	request( "http://some.url.2/v=" + resp ),
	request( "http://some.url.3/v=" + resp )
    );

    // 3단계
    var text = rvals[0] + rvals[1];

    // 4단계
    // 형식화 단계가 추가됐는가?
    if (token.messages[0].format) {
	text = yield token.messages[0].format( text );
    }

    // 5단계
    // AJAX 요청을 하나 더 시퀀스에 추가할까?
    if (/foobar/.test( resp )) {
	text = yield request(
	    "http://some.url.4/?v=" + text
	);
    }

    return text;
}

// 참고: '*steps()'은 이전에 'steps'에서 했던 것과 같은 'ASQ' sequence로 실행 가능하다.

