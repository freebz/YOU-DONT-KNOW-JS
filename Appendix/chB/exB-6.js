new Promise( function(resolve,reject){
    setTimeout( resolve, 100 );
} )
.then( function(){
    return Promise.all( [
	new Promise( function(resolve,reject){
	    setTimeout( function(){
		resolve( "Hello" );
	    }, 100 );
	} ),
	new Promise( function(resolve,reject){
	    setTimeout( function(){
		// 참고: 여기서 [ ] 배열이 필요하다.
		resolve( [ "World", "!" ] );
	    }, 100 );
	} )
    ] );
} )

.then( function(msgs) {
    console.log( msgs[0] ); // Hello
    console.log( msgs[1] ); // [ "World", "!" ]
} );
