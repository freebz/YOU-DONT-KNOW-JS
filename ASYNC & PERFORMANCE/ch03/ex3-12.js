var o = { then: function(){} };

// 'v'를 'o'의 '[[Prototype]]'에 연결한다.
var v = Object.create( o );

v.someStuff = "cool";
v.otherStuff = "not so cool";
v.hasOwnProperty( "then" ); // false
