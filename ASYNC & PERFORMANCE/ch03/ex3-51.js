// 폴리필 안전 체크
if (!Promise.observe) {
    Promise.observe = function(pr,cb) {
	// 'pr'의 귀결을 부수적으로 감지한다.
	pr.then(
	    function fulfilled (msg){
		// 비동기 콜백(잡)을 스케줄링한다.
		Promise.resolve( msg ).then( cb );
	    },
	    function rejected(err){
		// 비동기 콜백(잡)을 스케줄링한다.
		Promise.resolve( err ).then( cb );
	    }
	);

	// 원래 프라미스를 반환한다.
	return pr;
    };
}
