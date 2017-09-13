Object.defineProperty( Object.prototype, "__proto__", {
    get: function() {
	return Object.getPrototypeOf( this );
    },
    set: function(o) {
	// ES6부터는 setPrototypeOf( )를 사용한다.
	Object.setPrototypeOf( this, o );
	return o;
    }
} );
