function *foo() {
    // 두 요청을 "병렬" 실행하고
    // 두 프라미스 모두 귀결될 때까지 기다린다
    var result = yield Promise.all( [
	request( "http://some.url.1" ),
	request( "http://some.url.2" )
    ] );

    var r1 = results[0];
    var r2 = results[1];
    
    var r3 = yield request(
	"http://some.url.3/?v=" + r1 + "," + r2
    );
    console.log( r3 );
}

// 앞서 정의한 'run()' 유틸리티를 이용한다.
run( foo );
