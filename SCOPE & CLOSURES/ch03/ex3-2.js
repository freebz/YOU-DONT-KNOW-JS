// 3.2 일반 스코프에 숨기

function doSomething(a) {
    b = a + doSomethingElse( a * 2 );

    console.log( b * 3 );
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething( 2 ); // 15



function doSomething(a) {
    function doSomethingElse(a) {
	return a - 1;
    }
    var b;
    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 );
}

doSomething( 2 ); // 15
