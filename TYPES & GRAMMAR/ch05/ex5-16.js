// 5.5 함수 인자

var b = 3;
function foo( a = 42, b = a + b + 5 ) {
    // ...
}



function foo( a = 42, b = a + 1 ) {
    console.log( a, b);
}

foo(); // 42 43
foo( undefined ); // 42 43
foo( 5 ); // 5 6
foo (void 0, 7 ); // 42 7
foo( null ); // null 1



function foo( a = 42, b = a + 1 ) {
    console.log(
	arguments.length, a, b,
	arguments[0], arguments[1]
    );
}

foo(); // 0 42 43 undefined undefined
foo( 10 ); // 1 10 11 10 undefined
foo( 10, undefined ); // 2 10 11 10 undefined
foo( 10, null ); // 2 10 null 10 null



function foo(a) {
    a = 42;
    console.log( arguments[0] );
}

foo( 2 ); // 42 (연결된다)
foo(); // undefined (연결되지 않는다)



function foo(a) {
    "use strict";
    a = 42;
    console.log( arguments[0] );
}

foo( 2 ); // 2 (연결되지 않는다)
foo(); // undefined (연결되지 않는다)



function foo(a) {
    console.log( a + arguments[1] ); // 안전하다!
}

foo( 10, 32 ); // 42
