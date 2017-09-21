class P {
    foo() { console.log( "P.foo" ); }
}

class C extends P {
    foo() {
	super.foo();
    }
}

var c1 = new C();
c1.foo(); // "P.foo"

var D = {
    foo: function() {console.log( "D.foo" ); }
};

var E = {
    foo: C.prototype.foo
};

// E를 D에 위임 링크한다.
Object.setPrototypeOf( E, D );

E.foo(); // "P.foo"
