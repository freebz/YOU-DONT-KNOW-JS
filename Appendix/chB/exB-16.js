var ASQ = require('asynquence');

var sq = ASQ( function(done){
    setTimeout( function(){
	done( "Hello World" );
    }, 200 );
} );

ASQ( function(done){
    setTimeout( done, 100 );
} )
// 'sq' 시퀀스를 합한다.
.seq( sq )
.val( function(msg){
    console.log( msg ); // Hello World
} )
