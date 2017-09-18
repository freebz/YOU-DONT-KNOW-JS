if (!Promise.map) {
    Promise.map = function(vals,cb) {
	// 모든 매핑된 프라미스를 기다리는 새 프라미스
	return Promise.all(
	    // 참고: 'map()'은 값의 배열을 프라미스 배열로 변환한다.
	    vals.map( function(val) {
		// 'val'이 비동기적으로 매핑된 이후 귀결된 새 프라미스로 'val'을 대체한다.
		return new Promise( function(resolve){
		    cb( val, resolve );
		} );
	    } )
	);
    };
}
