function foo(x,y,cb) {
    setTimeout( function(){
	// 'cb( )'는 "에러-우선 스타일"이다.
	cb( null, x + y );
    }, 1000 );
}
