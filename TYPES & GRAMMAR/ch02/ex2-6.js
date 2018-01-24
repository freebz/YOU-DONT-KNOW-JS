// 2.3.3 안전한 정수 범위

// 2.3.4 정수인지 확인

Number.isInteger( 42 ); // true
Number.isInteger( 42.000 ); // true
Number.isInteger( 42.3 ); // false



if (!Number.isInteger) {
    Number.isInteger = function(num) {
	return typeof num == "number" && num % 1 == 0;
    };
}



Number.isSafeInteger( Number.MAX_SAFE_INTEGER ); // true
Number.isSafeInteger( Math.pow( 2, 53 ) ); // false
Number.isSafeInteger( Math.pow( 2, 53 ) - 1); // true



if (!Number.isSafeInteger) {
    Number.isSafeInteger = function(num) {
	return Number.isInteger( num ) &&
	    Math.abs( num ) <= Number.MAX_SAFE_INTEGER;
    };
}
