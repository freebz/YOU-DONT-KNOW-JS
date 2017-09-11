function foo() {
    setTimeout(() => {
	// 여기서 'this'는 어휘적으로 'foo()'에서 상속된다.
	console.log( this.a );
    }, 100);
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
