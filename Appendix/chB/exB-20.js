var ASQ = require('asynquence');
require('asynquence-contrib');

ASQ( 42 )
// 시퀀스에 지연을 넣는다.
.after( 100 )
.val( function(msg){
    console.log( msg ); // 42
} );
