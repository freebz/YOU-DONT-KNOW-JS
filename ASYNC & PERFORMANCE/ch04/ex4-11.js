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

something.next().value; // 1
something.next().value; // 9
something.next().value; // 33
something.next().value; // 105
