function Foo() { /* .. */ }
Foo.prototype //...

function Bar() { /* .. */ }
Bar.prototype = Object.create( Foo.prototype );

var b1 = new Bar( "b1" );


// 'Foo'와 'Bar'의 관계를 대조한다.
Bar.prototype instanceof Foo;	// true
Object.getPrototypeOf( Bar.prototype )
    === Foo.prototype;		// true
Foo.prototype.isPrototypeOf( Bar.prototype ); // true

// 'b1'과 'Foo', 'Bar'의 관계를 대조한다.
b1 instanceof Foo; // true
b1 instanceof Bar; // true
Object.getPrototypeOf( b1 ) === Bar.prototype; // true
Foo.prototype.isPrototypeOf( b1 ); // true
Bar.prototype.isPrototypeOf( b1 ); // true
