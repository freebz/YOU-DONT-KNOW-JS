var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject );

anotherObject.a;		// 2
myObject.a;			// 2

anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" );	     // false

myObject.a++;			// 허걱, 암시적인 가려짐이 발생한다!

anotherObject.a;		// 2
myObject.a;			// 3

myObject.hasOwnProperty( "a" );	// true
