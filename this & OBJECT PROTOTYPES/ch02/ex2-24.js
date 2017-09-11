function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}

// 인자들을 배열 형태로 죽 펼친다.
foo.apply( null, [2, 3] ); // a:2, b:3

// 'bind( )'로 커링한다.
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3
