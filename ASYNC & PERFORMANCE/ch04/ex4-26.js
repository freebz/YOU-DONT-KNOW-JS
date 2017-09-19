function *foo() {
    var r1 = yield request( "http://some.url.1" );
    var r2 = yield request( "http://some.url.2" );
    var r3 = yield request(
	"http://some.url.3/?v=" + r1 + "," + r2
    );
    console.log( r3 );
}

// 앞서 정의한 'run()' 유틸리티를 이용한다.
run( foo );
