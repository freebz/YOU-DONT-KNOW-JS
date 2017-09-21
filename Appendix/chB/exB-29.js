var ASQ = require('asynquence');
require('asynquence-contrib');

function doublePr(x) {
    return new Promise( function(resolve,reject){
	setTimeout( function(){
	    resolve( x * 2 );
	}, 100 );
    } );
}

function doubleSeq(x) {
    return ASQ( function(done){
	setTimeout( function(){
	    done( x * 2 )
	}, 100 );
    } );
}


var foo = ASQ.wrap( function*(token){
    var x = token.messages[0] + token.messages[1];

    // 진짜 프라미스를 yield한다.
    x = yield doublePr( x );

    // 시퀀스를 yield한다.
    x = yield doubleSeq( x );

    return x;
}, { gen: true } );

// ...

foo( 8, 9 )
.val( function(msg){
    console.log( msg ); // 68
} );
