// 3.4.5 네이트브 프로토타입

var a = " abc ";

a.indexOf( "c" ); // 3
a.toUpperCase(); // " ABC "
a.trim(); // "abc"



typeof Function.prototype; // "function"
Function.prototype(); // 빈 함수다!

RegExp.prototype.toString(); // "/(?:)/" - 빈 regex
"abc".match( RegExp.prototype ); // [""]



Array.isArray( Array.prototype ); // true
Array.prototype.push( 1, 2, 3 ); // 3
Array.prototype; // [1,2,3]

// 이런 식으로 놔두면 이상하게 작동할 수 있다!
// 다음 코드는 'Array.prototype'을 비워버린다
Array.prototype.length = 0;


// 프로토타입은 디폴트다

function isThisCool(vals,fn,rx) {
    vals = vals || Array.prototype;
    fn = fn || Function.prototype;
    rx = rx || RegExp.prototype;

    return rx.test(
	vals.map( fn ).join( "" )
    );
}

isThisCool(); // true

isThisCool(
    ["a","b","c"],
    function(v){ return v.toUpperCase(); },
	/D/
); // false
