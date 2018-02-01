// 5.2 핵심

function foo() {
    var a = 2;
    function bar() {
	console.log( a ); // 2
    }
    bar();
}

foo();



function foo() {
    var a = 2;
    function bar() {
	console.log( a );
    }
    return bar;
}

var baz = foo();

baz(); // 2 - Whoa, closure was just observed, man.



function foo() {
    var a = 2;
    function baz() {
	console.log( a ); // 2
    }
    bar( baz );
}

function bar(fn) {
    fn(); // look ma, I saw closure!
}



var fn;

function foo() {
    var a = 2;
    function baz() {
	console.log( a );
    }
    fn = baz; // assign baz to global variable
}

function bar() {
    fn(); // look ma, I saw closure!
}

foo();

bar(); // 2
