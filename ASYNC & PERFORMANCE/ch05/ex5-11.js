function fooASM(stdlib,foregin,heap) {
    "use asm";

    var arr = new stdlib.Int32Array( heap );

    function foo(x,y) {
	x = x | 0;
	y = y | 0;

	var i = 0;
	var p = 0;
	var sum = 0;
	var count = ((y|0) - (x|0)) | 0;

	// 내부 인접값을 모두 곱한다.
	for (i = x | 0;
	     (i | 0) < (y | 0);
	     p = (p + 8) | 0, i = (i + 1) | 0
	    ) {
	    // 결과를 저장한다.
	    arr[ p >> 3 ] = (i * (i + 1)) | 0;
	}

	// 모든 중간 단계의 값을 평균 낸다.
	for (i = 0, p = 0;
	     (i | 0) < (count | 0);
	     p = (p + 8) | 0, i = (i + 1) | 0
	    ) {
	    sum = (sum + arr[ p >> 3 ]) | 0;
	}

	return +(sum / count);
    }

    return {
	foo: foo
    };
}

var heap = new ArrayBuffer( 0x1000 );
var foo = fooASM( window, null, heap ).foo;

foo( 10, 20 ); // 233
