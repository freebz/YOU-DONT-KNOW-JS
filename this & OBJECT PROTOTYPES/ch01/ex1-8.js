function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo(); // 참조 에러: a는 정의되지 않았습니다(ReferenceError: a is not defined).
