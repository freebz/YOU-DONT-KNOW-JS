var ASQ = require('asynquence');
require('asynquence-contrib');

function double(done) {
    var args = [].slice.call( arguments, 1 );
    console.log( args );

    setTimeout( function(){
	done( args[args.length - 1] * 2 );
    }, 100 );
}

ASQ( 3 )
.waterfall(
    double, // [ 3 ]
    double, // [ 6 ]
    double, // [ 6, 12 ]
    double // [6, 12, 24 ]
)
.val( function(){
    var args = [].slice.call( arguments );
    console.log( args ); // [ 6, 12, 24, 48 ]
} );
