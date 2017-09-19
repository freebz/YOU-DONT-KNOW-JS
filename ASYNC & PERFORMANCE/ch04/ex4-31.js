function *foo() {
    console.log( "'*foo()' 시작" );
    yield 3;
    yield 4;
    console.log( "'*foo()' 끝" );
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo(); // 'yield' -위임!
    yield 5;
}

var it = bar();

it.next().value; // 1
it.next().value; // 2
it.next().value; // '*foo()' 시작
		 // 3
it.next().value; // 4
it.next().value; // '*foo()' 끝
		 // 5
