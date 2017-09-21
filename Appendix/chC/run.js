function run(gen) {
    var args = [].slice.call( arguments, 1), it;

    // 현재 콘텍스트에서 제너레이터를 초기화한다.
    it = gen.apply( this, args );

    // 제너레이터 완료를 의미하는 프라미스를 반환한다.
    return Promise.resolve()
	.then( function handleNext(value) {
	    // 다음yield된 값까지 실행한다.
	    var next = it.next( value );

	    return (function handleResult(next) {
		// 제너레이터 실행이 끝났다면,
		if (next.done) {
		    return next.value;
		}
		// 아니면 계속 실행한다.
		else {
		    return Promise.resolve( next.value )
			.then(
			    // 성공 시 귀결 값을 제너레이터로 반환하면서
			    // 비동기 루프를 재개한다.
			    handleNext,

			    // 'value'가 버림 프라미스면
			    // 제너레이터 자신이 에러를 처리하게끔
			    // 거꾸로 에러를 전파한다.
			    function handleErr(err) {
				return Promise.resolve(
				    it.throw( err )
				)
				.then( handleResult );
			    }
			);
		}
	    })(next);
	} );
}

