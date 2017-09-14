var Foo = { /* .. */ };
var Bar = Object.create( Foo );
Bar//...
var b1 = Object.create( Bar );


// 'Foo'와 'Bar'의 관계를 비교한다
Foo.isPrototypeOf( Bar ); // true
Object.getPrototypeOf( Bar ) === Foo; // true

// 'b1'을 'Foo', 'Bar'와 비교한다
Foo.isPrototypeOf( b1 ); // true
Bar.isPrototypeOf( b1 ); // true
Object.getPrototypeOf( b1 ) === Bar; // true
