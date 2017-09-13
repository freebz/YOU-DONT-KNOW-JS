var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject, {
    b: {
	enumerable: false,
	writable: true,
	configurable: false,
	value: 3
    },
    c: {
	enumerable: true,
	writable: false,
	configurable: false,
	value: 4
    }
} );

myObject.hasOwnProperty( "a" ); // false
myObject.hasOwnProperty( "b" ); // true
myObject.hasOwnProperty( "c" ); // true

myObject.a; // 2
myObject.b; // 3
myObject.c; // 4
