var a = 20;

function foo() {
    a = a + 1;
}

function bar() {
    a = a * 2;
}

// ajax()는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
