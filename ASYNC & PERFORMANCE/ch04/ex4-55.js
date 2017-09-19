function foo(url) {

    // ...

    // 이터레이터를 만들어 반환한다.
    return {
	next: function(v) {
	    // ...
	},
	throw: function(e) {
	    // ...
	}
    };
}

var it = foo( "http://some.url.1" );
