var ASQ = require('asynquence');
require('asynquence-contrib');

function double(done,x) {
    setTimeout( function(){
	done( x * 2 );
    }, 100 );
}

function output(msg) {
    console.log( msg );
}


var count = 0;

ASQ( 3 )
.until( double )
.val( output ) // 6
.until( function(done){
    count++;

    setTimeout( function(){
	if (count < 5) {
	    done.fail();
	}
	else {
	    // 'until( )' 재시도 루프를 빠져나간다.
	    done.break( "허걱" );
	}
    }, 100 );
} )
.or( output ); // 허걱
