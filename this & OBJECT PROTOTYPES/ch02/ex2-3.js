function foo() {
    "use strict"
    
    console.log( this.a );
}

var a = 2;

foo(); // 타입 에러: 'this'는 'undefined'입니다(TypeError: 'this' is 'undefined').

