function.add(xPromise,yPromise) {
    // 'Promise.all([ ])'는 프라미스 배열을 인자로 받아
    // 프리미스들이 모두 귀결될 때까지 기다렸다가
    // 새 프라미스를 만들어 반환하는 함수다.
    return Promise.all( [xPromise, yPromise] )

    // 프라미스가 귀결되면 'x'와 'y' 값을 받아 더한다.
	.then( function(values){
	    // 'values'는 앞에서 귀결된 프라미스가
	    // 건네준 메시지 배열이다.
	    return values[0] + values[1];
	} );
}

// 'fetchX()'와 'fetchY()'는 제각기 값을 가진
// 프라미스를 반환하는데, 지금 또는 나중에 준비된다.
add( fetchX(), fetchY() )

// 두 숫자의 합이 담긴 프라미스를 받는다.
// 이제 반환된 프라미스가 귀결될 때까지 대기하기 위해
// 'then()'을 연쇄 호출한다.

    .then( function(sum){
	console.log( sum ); // 더 쉽다!
    } );
