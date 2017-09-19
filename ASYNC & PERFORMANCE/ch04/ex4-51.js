function *foo() {
    var val = yield request( "http://some.url.1" );
    console.log( val );
}

run( foo );
