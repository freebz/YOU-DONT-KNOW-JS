function *foo(x) {
    var y = x * (yield);
    return y;
}

var it = foo( 6 );

// 'foo( )'를 시작한다.
it.next();

var res = it.next( 7 );

res.value; // 42
