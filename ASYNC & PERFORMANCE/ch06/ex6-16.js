function foo(x) {
    return x;
}

function bar(y) {
    return foo( y + 1 ); // 꼬리 호출
}

function baz() {
    return 1 + bar( 40 ); // 꼬리 호출 아님
}

baz(); // 42
