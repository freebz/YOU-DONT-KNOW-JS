function Foo() {
    // ...
}
Foo.prototype.something = function(){
    // ...
}
var a1 = new Foo();

// 중략

if (a1 instanceof Foo) {
    a1.something();
}
