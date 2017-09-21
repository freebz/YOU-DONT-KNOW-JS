var ASQ = require('asynquence');
require('asynquence-contrib');

var sq = ASQ.after( 100, "Hello World" );

sq.toPromise()
// 이제 sq는 표준적인 프라미스 연쇄다.
.then( function(msg){
    return msg.toUpperCase();
} )

.then( function(msg){
    console.log( msg ); // Hello World
} );
