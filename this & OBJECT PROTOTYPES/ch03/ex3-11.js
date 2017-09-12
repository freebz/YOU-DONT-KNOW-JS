var myObject = {
    foo: function() {
	console.log( "foo" );
    }
};

var someFoo = myObject.foo;

someFoo;               // function foo(){..}

myObject.foo;	       // function foo(){..}
