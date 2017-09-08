function foo() {
    foo.count = 4;  // 'foo'는 자기 자신을 가리킨다.
}

setTimeout( function(){
    // 익명 함수(이름이 없는 함수)는 자기 자신을 가리킬 방법이 없다.
}, 10 );
