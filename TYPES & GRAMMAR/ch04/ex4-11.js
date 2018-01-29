// 4.3.3 명시적 강제변환: * -> 불리언

var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;


Boolean( a ); // true
Boolean( b ); // true
Boolean( c ); // true

Boolean( d ); // false
Boolean( e ); // false
Boolean( f ); // false
Boolean( g ); // false



var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

!!a; // true
!!b; // true
!!c; // true

!!d; // false
!!e; // false
!!f; // false
!!g; // false



var a = [
    1,
    function(){ /* ... */ },
    2,
    function(){ /* ... */ }
];

JSON.stringify( a ); // "[1,null,2,null]"

JSON.stringify( a, function(key,val){
    if (typeof val == "function") {
	// 함수를 'ToBoolean' 강제변환한다.
	return !!val;
    }
    else {
	return val;
    }
} );
// "[1,true,2,true]"



var a = 42;
var b = a ? true : false;
