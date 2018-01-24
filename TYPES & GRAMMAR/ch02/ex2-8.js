// 2.4.3 특수 숫자

var a = 2 / "foo"; // NaN

typeof a === "number"; // true



var a = 2 / "foo";

a == NaN; // false
a === NaN; // false



var a = 2 / "foo";
isNaN( a ); // true



var a = 2 / "foo";
var b = "foo";

a; // NaN
b; // "foo"

window.isNaN( a ); // true
window.isNaN( b ); // true - 허걱!



if (!Number.isNaN) {
    Number.isNaN = function(n) {
	return (
	    typeof n === "number" &&
	    window.isNaN( n )
	);
    };
}

var a = 2 / "foo";
var b = "foo";

Number.isNaN( a ); // true
Number.isNaN( b ); // false - 휴, 다행이다!



if (!Number.isNaN) {
    Number.isNaN = function(n) {
	return n !== n;
    };
}



// 무한대

var a = 1 / 0;



var a = 1 / 0; // Infinity
var b = -1 / 0; // -Infinity



var a = Number.MAX_VALUE ; // 1.7976931348623157e+308
a + a; // 무한대
a + Math.pow( 2, 970 ); // 무한대
a + Math.pow( 2, 969 ); // 1.7976931348623157e+308



// 영(0)

var a = 0 / -3; // -0
var b = 0 * -3; // -0



var a = 0 / -3;

// (일부 브라우저에 한하여) 제대로 표시한다.
a; // -0

// 하지만 명세는 여러분에게 거짓말을 하라고 시킨다!
a.toString(); // "0"
a + ""; // "0"
String( a ); // "0"

// 이상하게도 JSON조차 속아 넘어간다.
JSON.stringify( a ); // "0"



+"-0"; // -0
Number( "-0" ); // -0
JSON.parse( "-0" ); // -0



var a = 0;
var b = 0 / -3;

a == b; // true
-0 == 0; // true

a === b; // true
-0 === 0; // true

0 > -0; // false
a > b; // false



function isNegZero(n) {
    n = Number( n );
    return (n === 0) && (1 / n === -Infinity);
}

isNegZero( -0 ); // true
isNegZero( 0 / -3 ); // true
isNegZero( 0 ); // false
