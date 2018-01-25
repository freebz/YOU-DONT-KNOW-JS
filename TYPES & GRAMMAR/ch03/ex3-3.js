// 3.2 패러 박싱하기

var a = "abc";

a.length; // 3
a.toUpperCase(); // "ABC"



// 3.2.1 객체 래퍼의 함정

var a = new Boolean( false );

if (!a) {
    console.log( "Oops" ); // 실행되지 않는다.
}



var a = "abc";
var b = new String( a );
var c = Object( a );

typeof a; // "string"
typeof b; // "object"
typeof c; // "object"

b instanceof String; // true
c instanceof String; // true

Object.prototype.toString.call( b ); // '[object String]'
Object.prototype.toString.call( c ); // '[object String]'
