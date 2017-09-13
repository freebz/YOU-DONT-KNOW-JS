function Foo() { /* .. */ }
Foo.prototype = { /* .. */ };  // 새 프로토타입 객체를 생성한다.

var a1 = new Foo();
a1.constructor === Foo;		// false!
a1.constructor === Object;	// true!
