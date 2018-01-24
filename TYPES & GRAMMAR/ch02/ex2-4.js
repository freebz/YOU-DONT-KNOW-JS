// 2.3 숫자

// 2.3.1 숫자 구문

var a = 42;
var b = 42.3;



var a = 0.42;
var b = .42;



var a = 42.0;
var b = 42.;



var a = 42.300;
var b = 42.0;

a; // 42.3
b; // 42



var a = 5E10;
a; // 50000000000
a.toExponential(); // "5e+10"

var b = a * a;
b; // 2.5e+21

var c = 1 / a;
c; // 2e-11



var a = 42.59;

a.toFixed( 0 ); // "43"
a.toFixed( 1 ); // "42.6"
a.toFixed( 2 ); // "42.59"
a.toFixed( 3 ); // "42.590"
a.toFixed( 4 ); // "42.5900"



var a = 42.59;

a.toPrecision( 1 ); // "4e+1"
a.toPrecision( 2 ); // "43"
a.toPrecision( 3 ); // "42.6"
a.toPrecision( 4 ); // "42.59"
a.toPrecision( 5 ); // "42.590"
a.toPrecision( 6 ); // "62.5900"



// 잘못된 구문
42.toFixed( 3 ); // SyntaxError

// 모두 올바른 구문
(42).toFixed( 3 ); // "42.000"
0.42.toFixed( 3 ); // "0.420"
42..toFixed( 3 ); // "42.000"



42 .toFixed(3); // "42.000"



var onethousand = 1E3; // 1 * 10^3
var onemilliononehundredthousand = 1.1E6; // 1.1 * 10^6



0xf3; // 243의 16진수
0Xf3; // 위와 같음
0363; // 243의 8진수



0o363; // 243의 8진수
0O363; // 위와 같음

0b11110011; // 243의 이진수
0B11110011; // 위와 같음
