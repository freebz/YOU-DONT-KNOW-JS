var x = 1;

function *foo() {
    x++;
    yield; // 멈추시오!
    console.log( "x:", x );
}

function bar() {
    x++;
}



// 이터레이터 'it'를 선언하여 제너레이터를 제어한다.
var it = foo();

// 'foo()'는 여기서 시작된다!
it.next();
x; // 2
bar();
x; // 3
it.next(); // x: 3
