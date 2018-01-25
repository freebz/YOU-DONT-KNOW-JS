// 3.3 언박싱

var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );

a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true



var a = new String( "abc" );
var b = a + ""; // 'b'에는 언박싱된 원시 값 "abc"이 대입된다.

typeof a; // "object"
typeof b; // "string"
