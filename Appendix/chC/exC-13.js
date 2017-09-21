listener.on( "foobar", function(data){

    // 이벤트를 처리할 새로운 프라미스 연쇄를 생성한다.
    new Promise( function(resolve,reject){
	// ...
    } )
    .then( .. )
    .then( .. );
} );
