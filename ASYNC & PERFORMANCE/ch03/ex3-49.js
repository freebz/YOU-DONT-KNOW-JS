// 'foo()'는 프라미스-인식형 함수다.

// 앞서 정의했던 'timeoutPromise( )'은
// 일정 시간 지연 후 버려진 프라미스를 반환한다.

// 'foo()'에 타임아웃을 건다.
Promise.race( [
    foo(), // 'foo()'를 실행한다.
    timeoutPromise( 3000 ) // 3초를 준다.
] )
.then(
    function(){
	// 'foo( )'는 제때 이루어졌다!
    },
    function(err){
	// 'foo( )'가 버려졌거나 제때 마치지 못했으니
	// 'err'를 조사하여 원인을 찾는다.
    }
);
