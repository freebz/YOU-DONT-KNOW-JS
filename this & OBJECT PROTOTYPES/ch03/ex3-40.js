var randoms = {
    [Symbol.iterator]: function() {
	return {
	    next: function() {
		return { value: Math.random() };
	    }
	};
    }
};

var randoms_pool = [];
for (var n of randoms) {
    randoms_pool.push( n );

    // 제한 없이 사용한다.
    if (randoms_pool.length === 100) break;
}
