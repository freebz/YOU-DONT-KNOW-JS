var p = Promise.resolve( 21 );

p.then( function(v){
    console.log( v ); // 21

    // 프라미스를 생성하여 반환한다.
    return new Promise( function(resolve,reject){
	// 비동기성을 부여한다!
	setTimeout( function(){
	    // 결괏값 '42'로 이룸
	    resolve( v * 2);
	}, 100 );
    } );
} )
.then( function(v){
    // 이전 단계에서 100ms 있다가 실행
    console.log( v ); // 42
} );
