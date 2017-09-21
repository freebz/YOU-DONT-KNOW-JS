var ASQ = require('asynquence');
require('asynquence-contrib');

function success1(done) {
    setTimeout( function(){
	done( 1 );
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


ASQ()
.try( success1 )
.val( output ) // 1
.try( failure3 )
.val( output ) // { catch: 3 }
.or( function(err){
    // 이 부분은 실행되지 않는다.
} );
