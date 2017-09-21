var ASQ = require('asynquence');

var sq = ASQ.failed( "허걱" );

ASQ()
.seq( sq )
.val( function(msg){
    // 실행되지 않는다.
} )

.or( function(err){
    console.log( err ); // 허걱
} );
