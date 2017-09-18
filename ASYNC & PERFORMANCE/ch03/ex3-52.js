Promise.race( [
    Promise.observe(
	foo(), // 'foo()'를 실행한다.
	function cleanup(msg){
	    // 제 시간에 끝나지 않아도
	    // 'foo()' 이후 뒷정리를 한다.
	}
    ),
    timeoutPromise( 3000 ) // 3초를 준다.
] )
