var p = Promise.resolve( 21 );

p.then( function(v){
    console.log( v ); // 21

    // 프라미스를 생성하여 반환한다.
    return new Promise( function(resolve,reject){
	// 결괏값 '42'로 이룸
	resolve( v * 2);
    } );
} )
.then( function(v){
    console.log( v ); // 42
} );
