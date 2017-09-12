function anotherFunction() { /*..*/ }
var anotherObject = {
    c: true
};

var anotherArray = [];

var myObject = {
    a: 2,
    b: anotherObject, // 사본이 아닌 레퍼런스다!
    c: anotherArray,  // 역시 레퍼런스다!
    d: anotherFunction
};

anotherArray.push( anotherObject, myObject );
