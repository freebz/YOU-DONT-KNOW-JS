// 3.1 함수 기반 스코프

function foo(a) {
    var b = 2;
    // some code
    function bar() {
	// ...
    }

    // more code
    var c = 3;
}



bar();                     // fails
console.log( a, b, c );    // all 3 fail
