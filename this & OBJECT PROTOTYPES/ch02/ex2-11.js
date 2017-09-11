function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

var bar = function() {
    foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// 하드 바인딩 된 'bar'에서 재정의된 'this'는 의미 없다.
bar.call( window ); // 2
