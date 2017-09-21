var ASQ = require('asynquence');

var sq = ASQ( 42 );

sq.val( function(msg){
    console.log( msg ); // 42
} );
