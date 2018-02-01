// 부록 A.3 전역 DOM 변수

<div id="foo"></div>



if (typeof foo == "undefined") {
    foo = 42; // 절대 실행되지 않겠지...
}

console.log( foo ); // HTML 요소
