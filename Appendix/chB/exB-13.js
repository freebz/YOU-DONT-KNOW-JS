var ASQ = require('asynquence');
require('asynquence-contrib');

function output(msg) {
    console.log( msg );
}


ASQ( 21 )
.pThen( function(msg){
    return msg * 2;
} )
.pThen( output ) // 42
.pThen( function(){
    // 예외를 던진다.
    doesnt.Exist();
} )
.pCatch( function(err){
    // 예외를 잡는다. (버림)
    console.log( err ); // ReferenceError
} )
.val( function(){
    // 이전 예외를 'pCatch()'가 잡았기 때문에
    // 메인 시퀀스는 성공 상태로 되돌아간다.
} );
