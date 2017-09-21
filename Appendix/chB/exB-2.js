var ASQ = require('asynquence');

// 1 단계 (동기)
ASQ( function(done){
    done( "Hello" ); // 수동으로 동기화한다.
} )

// 2 단계 (동기)
.val( function(greeting){
    return greeting + " Wrold";
} )

// 3 단계 (비동기)
.then( function(done,msg){
    setTimeout( function(){
	done( msg.toUpperCase() );
    }, 100 );
} )

// 4 단계 (동기)
.val( function(msg) {
    console.log( msg );
} );
