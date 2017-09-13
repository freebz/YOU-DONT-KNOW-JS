Foo.prototype.isPrototypeOf( a ); // true


// C의 [[Prototype]] 연쇄 어딘가에 b가 존재하는가? 코드가 간단하다.
b.isPrototypeOf( c );


Object.getPrototypeOf( a );


Object.getPrototypeOf( a ) === Foo.prototype; // true


a.__proto__ === Foo.prototype; // true
