// 4.6 추상 관계 비교

var a = [ 42 ];
var b = [ "43" ];

a < b; // true
b < a; // false



var a = [ "42" ];
var b = [ "043" ];

a < b; // false



var a = [ 4, 2 ];
var b = [ 0, 4, 3 ];

a < b; // false



var a = { b: 42 };
var b = { b: 43 };

a < b; // 결과는?



var a = { b: 42 };
var b = { b: 43 };

a < b; // false
a == b; // false
a > b; // false

a <= b; // true
a >= b; // true



var a = [ 42 ];
var b = "043";

a < b; // false -- 문자열 비교!
Number( a ) < Number( b ); // true -- 숫자 비교!
