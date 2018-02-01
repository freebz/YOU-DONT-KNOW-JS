// 부록 A.2 호스트 객체

var a = document.createElement( "div" );

typeof a; // "object" -- 예상대로군!
Object.prototype.toString.call( a ); // "[object HTMLDivElement]"

a.tagName; // "DIV"
