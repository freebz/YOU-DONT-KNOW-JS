// 프라미스를 타임아웃시키는 유틸리티
function timeoutPromise(delay) {
    return new Promise( function(resolve,reject){
	setTimeout( function() {
	    reject( "타임아웃!" );
	}, delay );
    } );
}

// 'foo()'에 타임아웃을 건다.
Promise.race( [
    foo(),                  // 'foo()'를 실행
    timeoutPromise( 3000 )  // 3초를 준다.
] )
.then(
    function(){
	// 'foo( )'가 제시간에 이루어졌다!
    },
    function(err){
	// 'foo()'가 버려졌거나 제시간에 못 마쳤다.
	// 'err'를 조사하여 원인을 파악한다.
    }
);
