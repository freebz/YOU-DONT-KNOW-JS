var a;

function foo(x) {
    if (!a) {
	a = x * 2;
	baz();
    }
}

function bar(x) {
    if (!a) {
	a = x / 2;
	baz();
    }
}

function baz() {
    console.log( a );
}

// ajax( )는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
