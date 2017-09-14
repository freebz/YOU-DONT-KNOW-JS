var Foo = {
    bar: function(x) {
	if (x < 10) {
	    return Foo.bar( x * 2 );
	}
	return x;
    },
    baz: function baz(x) {
	if (x < 10) {
	    return baz( x * 2 );
	}
	return x;
    }
};
