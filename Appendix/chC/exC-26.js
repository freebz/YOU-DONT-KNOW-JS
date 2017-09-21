ASQ()
.runner(
    ASQ.csp.go( function*(ch){
	yield ASQ.csp.put( ch, "http://some.url.2" );

	var url1 = yield ASQ.csp.take( ch );
	// "http://some.url.1"

	var res1 = yield ASQ.csp.take( request( url1 ) );

	yield ASQ.csp.put( ch, res1 );
    } ),
    ASQ.csp.go( function*(ch){
	var url2 = yield ASQ.csp.take( ch );
	// "http://some.url.2"

	yield ASQ.csp.put( ch, "http://some.url.1" );

	var res2 = yield ASQ.csp.take( request( url2 ) );
	var res1 = yield ASQ.csp.take( ch );

	// 결과를 시퀀스 다음 단계로 넘긴다.
	ch.buffer_size = 2;
	ASQ.csp.put( ch, res1 );
	ASQ.csp.put( ch, res2 );
    } )
)
.val( function(res1,res2){
    // 'res1'는 "http://some.url.1"의 응답이다.
    // 'res2'는 "http://some.url.2"의 응답이다.
} );
