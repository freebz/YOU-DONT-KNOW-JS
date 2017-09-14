console.log( "A" );

setTimeout( function() {
    console.log( "B" );
}, 0 );

// 이론적인 "잡 API"
schedule( function() {
    console.log( "C" );

    schedule( function() {
	console.log( "D" );
    } );
} );
