function *foo() {
    try {
	yield "B";
    }
    catch (err) {
	console.log( "'*foo()'에서 붙잡힌 에러:", err );
    }

    yield "C";

    throw "D";
}

function *bar() {
    yield "A";

    try {
	yield *foo();
    }
    catch (err) {
	console.log( "'*bar()'에서 붙잡힌 에러:", err );
    }

    yield "E";

    yield *baz();

    // 아래 코드는 실행되지 않는다!
    yield "G";
}

function *baz() {
    throw "F";
}

var it = bar();

console.log( "외부:", it.next().value );
// 외부: A

console.log( "외부:", it.next( 1 ).value );
// 외부: B

console.log( "외부:", it.throw( 2 ).value );
// '*foo()'에서 붙잡힌 에러: 2
// 외부: C

console.log( "외부:", it.next( 3 ).value );
// '*bar()'에서 붙잡힌 에러: D
// 외부: E

try {
    console.log( "외부:", it.next( 4 ).value );
}
catch (err) {
    console.log( "외부에서 붙잡힌 에러:", err );
}
// 외부에서 붙잡힌 에러: F
