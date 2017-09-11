function foo() {
    var self = this; // 'this'를 어휘적으로 포착한다.
    setTimeout( function(){
	console.log( self.a );
    }, 100);
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
