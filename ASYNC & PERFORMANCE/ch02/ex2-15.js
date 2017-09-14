function asyncify(fn) {
    var orig_fn = fn,
	intv = setTimeout( function(){
	    intv = null;
	    if (fn) fn();
	}, 0 );

    fn = null;

    return function() {
	// 비동기 차례를 지나갔다는 사실을 나타내기 위해
	// 'intv' 타이머가 기동하기도 전에 너무 빨리 발사
	if (intv) {
	    fn = orig_fn.bind.apply(
		orig_fn,
		// 인자로 전달된 값들을 커링하면서
		// 감싸미의 'this'에 'bind( )' 호출 인자를 추가한다.
		[this].concat( [].slice.call( arguments ) )
	    );
	}
	// 이미 비동기다.
	else {
	    // 원본 함수 호출
	    origin_fn.apply( this, arguments );
	}
    };
}
