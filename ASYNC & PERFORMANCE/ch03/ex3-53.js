// 폴리필 안전 체크
if (!Promise.first) {
    Promise.first = function(prs) {
	return new Promise( function(resolve,reject){
	    // 전체 프로미스를 순회한다.
	    prs.forEach( function(pr){
		// 값을 정규화한다.
		Promise.resolve( pr )
		// 어떤 프라미스가 가장 처음 이기더라도
		// 메인 프라미스를 귀결한다.
		    .then( resolve );
	    } );
	} );
    };
}
