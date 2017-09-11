function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo;        // 함수 레퍼런스/별명!

var a =  "엥 전역이네!";  // 'a' 역시 전역 객체의 프로퍼티

bar();                    // "엥, 전역이네!"
