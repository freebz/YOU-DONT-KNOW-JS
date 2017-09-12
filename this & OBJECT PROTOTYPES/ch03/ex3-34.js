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

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty( "b" ); // true

// ...

for (var k in myObject) {
    console.log( k, myObject[k] );
}
// "a" 2
