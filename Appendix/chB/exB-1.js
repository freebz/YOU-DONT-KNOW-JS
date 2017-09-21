var ASQ = require('asynquence');

ASQ(
    // 1 단계
    function(done){
	setTimeout( function(){
	    done( "Hello" );
	}, 100 );
    },
    // 2 단계
    function(done,greeting) {
	setTimeout( function(){
	    done( greeting + " World" );
	}, 100 );
    }
)

// 3 단계
.then( function(done,msg){
    setTimeout( function(){
	done( msg.toUpperCase() );
    }, 100 );
} )

// 4 단계
.then( function(done,msg){
    console.log( msg ); // Hello World
} );
