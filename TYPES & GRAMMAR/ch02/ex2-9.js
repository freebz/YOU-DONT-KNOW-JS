// 2.4.4 특이한 동등 비교

var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 ); // false



if (!Object.is) {
    Object.is = function(v1, v2) {
	// '-0' 테스트
	if (v1 === 0 && v2 === 0) {
	    return 1 / v1 === 1 / v2;
	}
	// 'NaN' 테스트
	if (v1 !== v1) {
	    return v2 !== v2;
	}
	// 기타
	return v1 === v2;
    };
}
