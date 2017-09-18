function bar() {
    // 'foo()'는 확실히 끝났으므로
    // 'bar()' 작업을 한다.
}

function oopsBar() {
    // 어랏, 'foo()'에서 뭔가 잘못되어
    // 'bar()'는 실행되지 않는다.
}

// 'baz()'와 'oopsBaz()'도 마찬가지!

var p = foo( 42 );

p.then( bar, oopsBar );

p.then( baz, oopsBaz );
