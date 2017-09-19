var something = (function(){
    var nextVal;

    return {
	// 'for...of' 루프에서 필요하다.
	[Symbol.iterator]: function(){ return this; },

	// 표준 이터레이터 인터페이스 메서드
	next: function(){
	    if (nextVal === undefined) {
		nextVal = 1;
	    }
	    else {
		nextVal = (3 * nextVal) + 6
	    }

	    return { done:false, value:nextVal };
	}
    };
})();



for (var v of something) {
    console.log( v );

    // 무한 루프가 되지 않게 하라!
    if (v > 500) {
	break;
    }
}
// 1 9 33 105 321 969
