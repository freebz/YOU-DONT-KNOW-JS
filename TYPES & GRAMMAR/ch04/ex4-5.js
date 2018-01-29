// 4.3 명시적 강제변환

// 4.3.1 명시적 강제변환: 문자열 <-> 숫자

var a = 42;
var b = String( a );

var c = "3.14";
var d = Number( c );

b; // "42"
d; // 3.14



var a = 42;
var b = a.toString();

var c = "3.14";
var d = +c;

b; // "42"
d; // 3.14



var c = "3.14";
var d = 5+ +c;
d; // 8.14



- - "3.14" // 3.14


1 + - + + + - + 1; // 2
