var steps = ASQ.iterable()

.then( function STEP1(token){
    var url = token.messages[0].url;

    // 형식화 단계가 추가됐는가?
    if (token.messages[0].format) {
	steps.then( token.messages[0].format );
    }
    return request( url );
} )

.then( function STEP2(resp){
    // AJAX 요청을 하나 더 시퀀스에 추가할까?
    if (/x1/.test( resp )) {
	steps.then( function STEP5(text){
	    return request(
		"http://some.url.4/?v=" + text
	    );
	} );
    }

    return ASQ().gate(
	request( "http://some.url.2/?v=" + resp ),
	request( "http://some.url.3/?v=" + resp )
    );
} )

.then( function STEP3(r1,r2){ return r1 + r2; } );
