function request(url) {
    var ch = ASQ.csp.channel()
    ajax( url ).then( function(content){
	// 'putAsync()'는 'put()'을 제너레이터 외부에서
	// 사용 가능하게 바꾼 버전으로 작업이 끝나면 프라미스를 반환한다.
	// 예제에서는 이 프라미스를 사용하진 않았지만
	// 값이 'take()'되는 시점에 알림이 필요할 땐
	// 사용 가능하다.
	ASQ.csp.putAsync( ch, content );
    } );
    return ch;
}
