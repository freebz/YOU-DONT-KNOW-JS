var ASQ = require('asynquence');
require('asynquence-contrib');

function success1(done) {
    setTimeout( function(){
	done( 1 );
    }, 100 );
}

function success2(done) {
    setTimeout( function(){
	done( 2 );
    }, 100 );
}

function failure3(done) {
    setTimeout( function(){
	done.fail( 3 );
    }, 100 );
}

function output(msg) {
    console.log( msg );
}


ASQ().race(
    failure3,
    success1
)
.or( output ); // 3

ASQ().any(

    success1,
    failure3,
    success2
)
.val( function(){
    var args = [].slice.call( arguments );
    console.log(
	args // [ 1, undefined, 2 ]
    );
} );

ASQ().first(
    failure3,
    success1,
    success2
)
.val( output ); // 1

ASQ().last(
    failure3,
    success1,
    success2
)
.val( output ); // 2

ASQ().none(
    failure3
)
.val( output ) // 3
.none(
    failure3,
    success1
)
.or( output ); // 1
