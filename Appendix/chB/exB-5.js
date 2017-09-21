var ASQ = require('asynquence');

ASQ( function(done){
    setTimeout( done, 100 );
} )

.gate(
    function(done){
	setTimeout( function(){
	    done( "Hello" );
	}, 100 );
    },
    function(done){
	setTimeout( function(){
	    done( "World", "!" );
	}, 100 );
    }
)

.val( function(msg1,msg2){
    console.log( msg1 ); // Hello
    console.log( msg2 ); // [ "World", "!" ]
} );
