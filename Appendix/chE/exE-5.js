// 부록 B.3 렉시컬 this

var foo = a => {
    console.log( a );
};

foo( 2 ); // 2



var obj = {
    id: "awesome",
    cool: function coolFn() {
	console.log( this.id );
    }
};

var id = "not awesome"
obj.cool(); // awesome
setTimeout( obj.cool, 100 ); // not awesome



var obj = {
    count: 0,
    cool: function coolFn() {
	var self = this;

	if (self.count < 1) {
	    setTimeout( function timer(){
		self.count++;
		console.log( "awesome?" );
	    }, 100 );
	}
    }
};

obj.cool(); // awesome?



var obj = {
    count: 0,
    cool: function coolFn() {
	if (this.count < 1) {
	    setTimeout( () => { // arrow-function ftw?
		this.count++;
		console.log( "awesome?" );
	    }, 100 );
	}
    }
};

obj.cool(); // awesome?



var obj = {
    count: 0,
    cool: function coolFn() {
	if (this.count < 1) {
	    setTimeout( function timer(){
		this.count++; // `this` is safe
		// because of `bind(...)`
		console.log( "more awesome" );
	    }.bind( this ), 100 ); // look, `bind()`!
	}
    }
};

obj.cool(); // more awesome
