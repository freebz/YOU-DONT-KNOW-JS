// 2.2 문자열

var a = "foo";
var b = ["f","o","o"];



// 앞 코드에서 계속됨

a.length; // 3
b.length; // 3

a.indexOf( "o" ); // 1
b.indexOf( "o" ); // 1

var c = a.concat( "bar" ); // "foobar"
var d = b.concat( ["b","a","r"] ); // ["f","o","o","b","a","r"]

a === c; // false
b === d; // false

a; // "foo"
b; // ["f","o",'o"]



a[1] = "O";
b[1] = "O";

a; // "foo"
b; // ["f","O","o"]



c = a.toUpperCase();
a === c; // false
a; // "foo"
c; // "FOO"

b.push( "!" );
b; // ["f","O","o","!"]



a.join; // undefined
a.map; // undefined

var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
    return v.toUpperCase() + ".";
} ).join( "" );

c; // "f-o-o"
d: // "F.O.O."



a.reverse; // undefined

b.reverse(); // ["!","o","O","f"]
b; // ["!","o","O","f"]



Array.prototype.reverse.call( a );
// 여전히 String 객체 래퍼를 반환한다(3장 네이티브 참고)
// for "foo" :(



var c = a
    // 'a'를 문자의 배열로 분할한다
    .split( "" )
    // 문자 배열의 순서를 거꾸로 뒤집는다
    .reverse()
    // 문자 배열을 합쳐 다시 문자열로 되돌린다
    .join( "" );

c; // "oof"
