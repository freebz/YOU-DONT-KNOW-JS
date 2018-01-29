// 비교하기: null -> undefined

var a = null;
var b;

a == b; // true
a == null; // true
b == null; // true
a == false; // false
b == false; // false
a == ""; // false
b == ""; // false
a == 0; // false
b == 0; // false



var a = doSomething();

if (a == null) {
    // ...
}



var a = doSomething();

if (a === undefined || a === null) {
    // ...
}
