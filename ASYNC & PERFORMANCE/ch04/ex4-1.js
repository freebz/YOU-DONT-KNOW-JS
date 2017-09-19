var x = 1;

function foo() {
    x++;
    bar(); // <-- 이 줄의 정체는?
    console.log( "x:", x );
}

function bar() {
    x++;
}

foo(); // x: 3
