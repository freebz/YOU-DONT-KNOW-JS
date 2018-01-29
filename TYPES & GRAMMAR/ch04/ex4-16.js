// 4.4.5 &&와 || 연산자

var a = 42;
var b = "abc";
var c = null;

a || b; // 42;
a && b; // "abc"

c || b; // "abc"
c && b; // null



a || b;
// 대략 다음과 같다.
a ? a : b;

a && b;
// 대략 다음과 같다.
a ? b : a;



function foo(a,b) {
    a = a || "hello";
    b = b || "world";

    console.log( a + " " + b );
}

foo(); // "hello world"
foo( "오 마이", "갓!" ); // "오 마이 갓!"



foo( "바로 이거야!", ""); // "바로 이거야! world" <-- 어이쿠!



function foo() {
    console.log( a );
}

var a = 42;

a && foo(); // 42



var a = 42;
var b = null;
var c = "foo";

if (a && (b || c)) {
    console.log( "넵" );
}



if (!!a && (!!b || !!c)) {
    console.log( "yep" );
}
