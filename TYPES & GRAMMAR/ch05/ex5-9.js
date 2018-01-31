// 5.2 연산자 우선순위

var a = 42;
var b = "foo";

a && b; // "foo"
a || b; // 42



var a = 42;
var b = "foo";
var c = [1,2,3];

a && b || c; // 결과는?
a || b && c; // 결과는?



var a = 42, b;
b = ( a++, a );

a; // 43
b; // 43



var a = 42, b;
b = a++, a;

a; // 43
b; // 42



if (str && (matches = str.match( /[aeiou]/g ))) {
    // ...
}



var a = 42;
var b = "foo";
var c = false;

var d = a && b || c ? c || b ? a : c && b : a;

d; // 결과는?



(false && true) || true; // true
false && (true || true); // false



false && true || true; // true
(false && true) || true; // true



true || false && false; // true

(true || false) && false; // false-아니네!
true || (false && false); // true-맞다, 이겼다!
