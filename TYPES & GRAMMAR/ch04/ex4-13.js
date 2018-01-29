// 4.4.2 암시적 강제변환: 문자열 <-> 숫자

var a = "42";
var b = "0";

var c = 42;
var d = 0;

a + b; // "420"
c + d; // 42



var a = [1,2];
var b = [3,4];

a + b; // "1,23,4"



var a = 42;
var b = a + "";

b; // "42"



var a = {
    valueOf: function() { return 42; },
    toString: function() { return 4; }
};

a + ""; // "42"

String( a ); // "4"



var a = "3.14";
var b = a - 0;

b; // 3.14


var a = [3];
var b = [1];

a - b; // 2
