var rejectedPr = new Promise( function(resolve,reject){
    // 이 프라미스를 버림 프라미스로 귀결시킨다.
    resolve( Promise.reject( "허걱" ) );
} );

rejectedPr.then(
    function fulfilled(){
	// 실행되지 않는다.
    },
    function rejected(err){
	console.log( err ); // "허걱"
    }
);
