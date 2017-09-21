var ASQ = require('asynquence');

var sq = ASQ( function(done){
    setTimeout( function(){
	// 시퀀스에 에러를 알린다.
	done.fail( "허걱" );
    }, 100 );
} )

.then( function(done) {
    // 여기는 실행되지 않는다.
} )

.or( function(err){
    console.log( err ); // 허걱
} )

.then( function(done) {
    // 여기도 실행되지 않는다.
} );

// 나중에

sq.or( function(err){
    console.log( err ); // 허걱
} );
