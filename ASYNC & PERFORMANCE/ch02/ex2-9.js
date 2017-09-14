function addNumbers(x,y) {
    // 인자가 숫자인지 확인한다.
    x = Number( x );
    y = Number( y );

    // +는 안전한 덧셈 연산을 할 것이다.
    return x + y;
}

addNumbers( 21, 21 ); // 42
addNumbers( 21, "21" ); // 42
