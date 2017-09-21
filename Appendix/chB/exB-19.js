var ASQ = require('asynquence');
require('asynquence-contrib');

var sq1 = ASQ.after( 100, "Hello", "World" );
var sq2 = ASQ.failAfter( 100, "허걱" );

sq1.val( function(msg1,msg2){
    console.log( msg1, msg2 ); // Hello World
} );

sq2.or( function(err){
    console.log( err ); // 허걱
} );
