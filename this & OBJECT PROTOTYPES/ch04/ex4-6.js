var Something = {
    cool: function() {
	this.greeting = "Hello World";
	this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
Something.greeting;    // "Hello World"
Something.count;       // 1

var Another = {
    cool: function() {
	// 'Something'을 암시적으로 'Another'로 믹스인한다.
	Something.cool.call( this );
    }
};

Another.cool();
Another.greeting;    // "Hello World"
Another.count;	     // 1 ('Something'과 상태가 공유되지 않는다.)
