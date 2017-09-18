var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello, World" );
var p3 = Promise.reject( "허걱" );

Promise.race( [p1,p2,p3] )
.then( function(msg){
    console.log( msg ); // 42
} );

Promise.all( [p1,p2,p3] )
.catch( function(err){
    console.error( err ); // "허걱"
} );

Promise.all( [p1,p2] )
.then( function(msgs){
    console.log( msgs ); // [42, "hello, World"]
} );
