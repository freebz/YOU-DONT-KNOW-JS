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

function plusOne(x,done) {
    setTimeout( function(){
	done( x + 1 );
    }, 100 );
}

ASQ( [1,2,3] )
.map( double ) // 메시지 '[1,2,3]'가 들어간다.
.map( plusOne ) // 메시지 '[2,4,6]'가 들어간다.
.val( output ); // [3,5,7]
