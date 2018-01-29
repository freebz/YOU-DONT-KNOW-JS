// 4.2.3 ToBoolean

// Falsy 값

// Falsy 객체

var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );



var d = Boolean( a && b && c );

d; // true



if (document.all) { /* it's IE */ }



// truthy 값

var a = "false";
var b = "0";
var c = "''";

var d = Boolean( a && b && c );

d;



var a = []; // 빈 배열 - truthy일까, falsy일까?
var b = {}; // 빈 객체 - truthy일까, falsy일까?
var c = function(){}; // 빈 함수 - truthy일까, falsy일까?

var d = Boolean( a && b && c );

d;
