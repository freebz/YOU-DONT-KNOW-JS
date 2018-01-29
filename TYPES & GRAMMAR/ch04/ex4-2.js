// 4.2 추상 연산

// 4.2.1 ToString

// '1.07'에 '1000'을 7번 곱한다.
var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

// 소수점 이하로 3 x 7 => 21자리까지 내려간다.
a.toString(); // "1.07e21"



var a = [1,2,3];
a.toString(); // "1,2,3"



// JSON 문자열화

JSON.stringify( 42 ); // "42"
JSON.stringify( "42" ); // ""42"" (따옴표가 붙은 문자열 인자를 문자열화한다)
JSON.stringify( null ); // "null"
JSON.stringify( true ); // "true"



JSON.stringify( undefined ); // undefined
JSON.stringify( function(){} ); // undefined

JSON.stringify(
    [1,undefined,function(){},4]
); // "[1,null,null,4]"

JSON.stringify(
    { a:2, b:function(){} }
); // "{"a":2}"



var o = { };

var a = {
    b: 42,
    c: o,
    d: function(){}
};

// 'a'를 환형 참조 객체로 만든다.
o.e = a;

// 환형 참조 객체는 JSON 문자열화 시 에러가 난다
// JSON.stringify( a );

// JSON 값으로 직렬화하는 함수를 따로 정의한다.
a.toJSON = function() {
    // 직렬화에 프로퍼티 'b'만 포함시킨다.
    return { b: this.b };
};

JSON.stringify( a ); // "{"b":42}"



var a = {
    val: [1,2,3],

    // 맞다!
    toJSON: function(){
	return this.val.slice( 1 );
    }
};

var b = {
    val: [1,2,3],

    // 틀리다!
    toJSON: function(){
	return "[" +
	    this.val.slice( 1 ).join() +
	"]";
    }
};

JSON.stringify( a ); // "[2,3]"

JSON.stringify( b ); // ""[2,3]""



var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
};

JSON.stringify( a , ["b","c"] ); // "{"b":42,"c":"42"}"

JSON.stringify( a, function(k,v){
    if (k !== "c") return v;
} );
// "{"b":42,"d":[1,2,3]}"



var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
};


JSON.stringify( a, null, 3 );
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"


JSON.stringify( a, null, "-----" );
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"
