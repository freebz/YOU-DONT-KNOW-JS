// 객체 분해

function getData() {
    // ...
    return {
	a: 42,
	b: "foo"
    };
}

var { a, b } = getData();

console.log( a, b ); // 42 "foo"



var res = getData();
var a = res.a;
var b = res.b;



function foo({ a, b, c }) {
    // 다음 코드처럼 할 필요가 없다.
    // var a = obj.a, b = obj.b, c = obj.c
    console.log( a, b, c );
}

foo( {
    c: [1,2,3],
    a: 42,
    b: "foo"
} ); // 42 "foo" [1, 2, 3]
