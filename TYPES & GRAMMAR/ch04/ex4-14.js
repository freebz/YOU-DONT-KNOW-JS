// 4.4.3 암시적 강제변환: 불리언 -> 숫자

function onlyOne(a,b,c) {
    return !!((a && !b && !c) ||
	      (!a && b && !c) || (!a && !b && c));
}

var a = true;
var b = false;

onlyOne( a, b, b ); // true
onlyOne( b, a, b ); // true

onlyOne( a, b, a ); // false



function onlyOne() {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
	// falsy 값은 건너뛴다.
	// 0으로 취급하는 셈이다. 그러나 NaN은 피해야 한다.
	if (arguments[i]) {
	    sum += arguments[i];
	}
    }
    return sum == 1;
}

var a = true;
var b = false;

onlyOne( b, a ); // true
onlyOne( b, a, b, b, b ); // true

onlyOne( b, b ); // false
onlyOne( b, a, b, b, b, a ); // false



function onlyOne() {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
	sum += Number( !!arguments[i] );
    }
    return sum === 1;
}
