// 부록 B.1 동적 스코프

function foo() {
    console.log( a ); // 2
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;
bar();



function foo() {
    console.log( a ); // 3 (not 2!)
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();
