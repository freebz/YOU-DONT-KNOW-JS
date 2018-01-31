// 5.6 try...finally

function foo() {
    try {
	return 42;
    }
    finally {
	console.log( "Hello" );
    }

    console.log( "실행될 리 없지!" );
}

console.log( foo() );
// Hello
// 42



function foo() {
    try {
	throw 42;
    }
    finally {
	console.log( "Hello" );
    }

    console.log( "실행될 리 없지!" );
}

console.log( foo() );
// Hello
// Uncaught Exception: 42



function foo() {
    try {
	return 42;
    }
    finally {
	throw "어이쿠!";
    }

    console.log( "실행될 리 없지!" );
}

console.log( foo() );
// Uncaught Exception: 어이쿠!



for (var i=0; i<10; i++) {
    try {
	continue;
    }
    finally {
	console.log( i );
    }
}
// 0 1 2 3 4 5 6 7 8 9



function foo() {
    try {
	return 42;
    }
    finally {
	// 여기 'return ...'이 없군, 그럼 이전 return을 존중하자!
    }
}

function bar() {
    try {
	return 42;
    }
    finally {
	// 'return 42'를 무시한다.
	return;
    }
}

function baz() {
    try {
	return 42;
    }
    finally {
	// 'return 42'를 무시한다.
	return "Hello";
    }
}

foo(); // 42
bar(); // undefined
baz(); // Hello



function foo() {
    bar: {
	try {
	    return 42;
	}
	finally {
	    // 'bar' 레이블 블록으로 나간다.
	    break bar;
	}
    }

    console.log( "미쳤군!" );

    return "Hello";
}

console.log( foo() );
// 미쳤군!
// Hello
