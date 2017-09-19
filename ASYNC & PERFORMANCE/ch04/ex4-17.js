function *something() {
    try {
	var nextVal;

	while (true) {
	    if (nextVal === undefined) {
		nextVal = 1;
	    }
	    else {
		nextVal = (3 * nextVal) + 6;
	    }
	    
	    yield nextVal;
	}
    }
    // 정리 코드
    finally {
	console.log( "정리 완료!" );
    }
}



var it = something();
for (var v of it) {
    console.log( v );

    // 무한 루프가 되지 않게 하라!
    if (v > 500) {
	console.log(
	    // 제너레이터의 이터레이터를 마친다.
	    it.return( "Hello World" ).value
	);
	// 여기서 'break'문은 필요 없다.
    }
}

// 1 9 33 105 321 969
// 정리 완료!
// Hello World
