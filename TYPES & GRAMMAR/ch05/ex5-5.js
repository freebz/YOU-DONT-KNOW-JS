// 레이블

// 'bar()' 함수는 앞에서 정의되었다.

{
    foo: bar()
}



// 'foo' 레이블 루프
foo: for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
	// 두 루프의 반복자가 같을 때마다 바깥쪽 루프를 continue 한다.
	if (j == i) {
	    // 다음 순회 시 'foo' 붙은 루프로 점프한다.
	    continue foo;
	}

	// 홀수 배수는 건너뛴다.
	if ((j * i) % 2 == 1) {
	    // 평범한(레이블 없는), 안쪽 루프의 'continue'
	    continue;
	}

	console.log( i, j );
    }
}

// 1 0
// 2 0
// 2 1
// 3 0
// 3 2



// 'foo' 레이블 루프
foo: for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
	if ((i * j) >= 3) {
	    console.log( "그만!", i, j );
	    break foo;
	}

	console.log( i, j );
    }
}

// 0 0
// 0 1
// 0 2
// 0 3
// 1 0
// 1 1
// 1 2
// 그만! 1 3



// 'bar' 레이블 블록
function foo() {
    bar: {
	console.log( "Hello" );
	break bar;
	console.log( "절대 실행 안 되지!" );
    }
    console.log( "world" );
}

foo();
// Hello
// world
