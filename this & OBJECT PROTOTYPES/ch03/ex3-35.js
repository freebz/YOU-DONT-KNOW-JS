var myObject = { };
Object.defineProperty(
    myObject,
    "a",
    // 'a'를 열거가 가능하게 세팅한다(기본값이다).
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject,
    "b",
    // 'b'를 열거가 불가능하게 세팅한다.
    { enumerable: false, value: 3}
);

myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false

Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]
