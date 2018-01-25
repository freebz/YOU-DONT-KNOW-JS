// 3장 네이티브

var s = new String( "Hello World!" );

console.log( s.toString() ); // "Hello World!"



var a = new String( "abc" );

typeof a; // "object" ... "String"이 아니다!

a instanceof String; // true

Object.prototype.toString.call( a ); // "[object String]"



console.log( a );
