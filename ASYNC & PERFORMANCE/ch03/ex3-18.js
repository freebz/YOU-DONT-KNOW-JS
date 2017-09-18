var p = new Promise( function(resolve,reject){
    resolve( 42 );
} );

p.then(
    function fulfilled(msg){
	foo.bar();
	console.log( msg ); // 실행되지 않는다.
    },
    function rejected(err){
	// 결단코 실행되지 않을꺼야 ㅡㅡ;
    }
);
