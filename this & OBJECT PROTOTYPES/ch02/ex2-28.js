function foo() {
    // 화살표 함수를 반환한다.
    return (a) => {
	// 여기서 'this'는 어휘적으로 'foo()'에서 상속된다.
	console.log( this.a );
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 3이 아니다!
