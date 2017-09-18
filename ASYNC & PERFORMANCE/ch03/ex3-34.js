var p = Promise.resolve( 42 );

p.then(
    // 이룸 처리기가 생략되거나 함수 아닌 다른 값이 넘어오면
    // 다음과 같은 이룸 처리기가 있다고 가정하여 처리한다.
    // function(v) {
    // return v;
    // }
    null,
    function rejected(err){
	// 실행되지 않는다.
    }
);
