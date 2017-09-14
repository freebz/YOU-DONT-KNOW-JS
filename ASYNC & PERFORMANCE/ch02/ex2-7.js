function addNumbers(x,y) {
    // + 연산자는 인자를 문자열로 강제변환한 뒤
    // 덧붙이는 형태로 오버로딩 할 수 있기 때문에
    // 전달되는 값에 따라 항상 안전한 것은 아니다.
    return x + y;
}

addNumbers( 21, 21 ); // 42
addNumbers( 21, "21" ); // "2121"
