var ASQ = require('asynquence');
require('asynquence-contrib');

function output(msg) {
    console.log( msg );
}

function double(x,done) {
    setTimeout( function(){
	done( x * 2 );
    }, 100 );
}

ASQ().map( [1,2,3], double )
.val( output ); // [2,4,6]
