var ASQ = require('asynquence');

var p = Promise.resolve( 42 );

ASQ()
.promise( p ) // function(){ return p; }도 가능하다.
.val( function(msg){
    console.log( msg ); // 42
} );
