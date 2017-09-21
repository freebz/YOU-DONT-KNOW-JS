var ASQ = require('asynquence');

var sq1 = ASQ( function(done){
    doesnt.Exist(); // 콘솔에 예외를 던질 것이다.
} );

var sq2 = ASQ( function(done){
    doesnt.Exist(); // 시스템 에러만 던질 것이다.
} )

// 에러 알림 기능을 끈다.
.defer();

setTimeout( function(){
    sq1.or( function(err){
	console.log( err ); // ReferenceError
    } );

    sq2.or( function(err){
	console.log( err ); // ReferenceError
    } );
}, 100 );

// ReferenceError (sq1에서)
