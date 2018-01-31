// 2.2 렉시컬 속이기

// 2.2.1 eval

function foo(str, a) {
    eval( str ); // cheating!
    console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 ); // 1, 3



function foo(str) {
    "use strict";
    eval( str );
    console.log( a );    // ReferenceError: a is not defined
}

foo( "var a = 2" );
