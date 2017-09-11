function foo() {
    console.log( this.a );
}

function doFoo(fn) {
    // 'fn'은 'foo'의 또 다른 레퍼런스일 뿐이다.

    fn(); // <- 호출부!
}

var obj = {
    a: 2,
    foo: foo
};

var a =  "엥 전역이네!";  // 'a' 역시 전역 객체의 프로퍼티

doFoo( obj.foo );         // "엥, 전역이네!"
