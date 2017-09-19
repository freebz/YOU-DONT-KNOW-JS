function *foo(x) {
    var y = x * (yield "hello"); // <-- 값을 yield한다(준다)!
    return y;
}

var it = foo( 6 );

var res = it.next(); // 첫 번째 'next()'에선 아무것도 전달하지 않는다.
res.value; // "hello"

res = it.next( 7 ); // 기다리고 있는 'yield'에게 '7'을 넘긴다.
res.value; // 42
