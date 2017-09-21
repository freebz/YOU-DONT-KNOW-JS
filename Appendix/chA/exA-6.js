var D = {
    foo: function() { console.log( "D.foo" ); }
};

// E를 D에 작동 위임.
var E = Object.create( D );

// foo의 '[[HomeObject]]'를 'E'로,
// 'E.[[Prototype]]'를 'D'로 각각 수동 바인딩 하면 'super()'는 'D.foo()'가 된다.
E.foo = C.prototype.foo.toMethod( E, "foo" );

E.foo(); // "D.foo"
