function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var a =  "엥 전역이네!";  // 'a' 역시 전역 객체의 프로퍼티

setTimeout( obj.foo, 100 ); // "엥, 전역이네!"
