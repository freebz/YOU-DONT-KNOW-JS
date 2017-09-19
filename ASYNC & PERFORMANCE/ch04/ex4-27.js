function *foo() {
    // 두 요청을 "병렬" 실행한다.
    var p1 = request( "http://some.url.1" );
    var p2 = request( "http://some.url.2" );

    // 두 프라미스가 모두 귀결될 때까지 기다린다.
    var r1 = yield p1;
    var r2 = yield p2;
    
    var r3 = yield request(
	"http://some.url.3/?v=" + r1 + "," + r2
    );
    console.log( r3 );
}

// 앞서 정의한 'run()' 유틸리티를 이용한다.
run( foo );
