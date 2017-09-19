function *foo() {
    var r2 = yield request( "http://some.url.2" );
    var r3 = yield request( "http://some.url3/?v=" + r2 );

    return r3;
}

function *bar() {
    var r1 = yield request( "http://some.url1" );

    // 'run( )'를 통해 '*foo()'에 위임한다".
    var r3 = yield run( foo );

    console.log( r3 );
}

run( bar );
