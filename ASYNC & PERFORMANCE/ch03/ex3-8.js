function foo(x) {
    // 뭔가 시작이 제법 걸리는 일을 시작한다.

    // 프라미스를 생성하여 반환한다.
    return new Promise( function(resolve,reject){
	// 결과적으로 'resolve( )','reject( )
	// 중 한쪽을 호출하게 되고 이들은 프라미스의
	// 귀결 콜백 함수 역할을 한다.
    } );
}

var p = foo( 42 );

bar( p );

baz( p );
