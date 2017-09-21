var http = require('http');
var ASQ = require('asynquence');
require('asynquence-contrib');

/*
function pullFromDatabase(evt){
    return ASQ( function(done){
	setTimeout( function(){
	    done('test')
	}, 200);
    } );
}
*/

var server = http.createServer();
server.listen(8000);

// 반응형 옵저버
var request = ASQ.react( function setup(next,registerTeardown){
    server.addListener( "request", next );
    server.addListener( "close", this.stop );

    registerTeardown( function(){
	server.removeListener( "request", next );
	server.removeListener( "close", request.stop );
    } );
});

// 요청에 반응한다.
request
.seq( pullFromDatabase )
.val( function(data,res){
    res.end( data );
} );

// 노드 정리
process.on( "SIGINT", request.stop );
