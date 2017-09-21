var sq = ASQ( function(done){
    // 참고: "에러-우선 스타일" 콜백이어야 한다.
    someAsyncFuncWithCB( 1, 2, done.errfcb )
} )

.val( function(msg) {
    // ...
} )

.or( function(err){
    // ...
} );

// 참고: "에러-우선 스타일" 콜백이어야 한다.
anotherAsyncFuncWithCB( 1, 2, sq.errfcb() );
