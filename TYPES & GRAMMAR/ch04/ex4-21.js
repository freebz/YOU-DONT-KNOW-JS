// 비교하기: 객체 -> 비객체

var a = 42;
var b = [ 42 ];

a == b; // true



var a = "abc";
var b = Object( a ); // 'new String( a )'와 같다.

a === b; // false
a == b; // true



var a = null;
var b = Object( a ); // 'Object()'와 같다.
a == b; // false

var c = undefined;
var d = Object( c ); // 'Object()'와 같다.
c == d; // false

var e = NaN;
var f = Object( e ); // 'new Number( e )'와 같다.
e == f; // false
