// 1.3.1 값이 없는 vs 선언되지 않은

var a;

typeof a; // "undefined"

var b = 42;
var c;

// 그리고 나서,
b = c;

typeof b; // "undefined"
typeof c; // "undefined";



var a;

a; // undefined
b; // ReferenceError: b가 정의되지 않았습니다.



var a;

typeof a; // "undefined"

typeof b; // "undefined"
