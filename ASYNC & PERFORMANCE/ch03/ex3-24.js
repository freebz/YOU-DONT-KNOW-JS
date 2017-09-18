// 이렇게 하지 않도록!
foo( 42 )
.then( function(v){
    console.log( v );
} );

// 대신 이렇게!
Promise.resolve( foo( 42 ) )
.then( function(v){
    console.log( v );
} );
