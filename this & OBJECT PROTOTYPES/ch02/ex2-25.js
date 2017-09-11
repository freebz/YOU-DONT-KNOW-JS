function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}

// DMZ 객체 생성
var Φ = Object.create( null );

// 인자들을 배열 형태로 죽 펼친다.
foo.apply( Φ,[2, 3] ); // a:2, b:3

// 'bind( )'로 커링한다.
var bar = foo.bind( Φ, 2 );
bar( 3 );  // a:2, b:3
