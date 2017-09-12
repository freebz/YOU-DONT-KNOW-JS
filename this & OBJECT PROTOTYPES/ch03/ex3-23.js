var myObject = {
    a: 2
};

myObject.a; // 2

delete myObject.a;
myObject.a; // undefined

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: true,
    configurable: false,
    enumerable: true
} );

myObject.a; // 2

delete myObject.a;

myObject.a; // 2
