function addNumbers(x,y) {
    // 인자가 숫자인지 확인한다.
    if (typeof x != "number" || typeof y != "number") {
	throw Error( "인자 오류!" );
    }

    // 여기까지 실행됬다면 +는 안전하게 덧셈 연산을 한 셈이다.
    return x + y;
}

addNumbers( 21, 21 ); // 42
addNumbers( 21, "21" ); // Error: "잘못된 인자!"
