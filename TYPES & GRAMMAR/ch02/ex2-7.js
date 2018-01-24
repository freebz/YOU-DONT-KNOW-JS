// 2.4 특수 값

// 2.4.1 값 아닌 값

// 2.4.2 Undefined

function foo() {
    undefined = 2; // 정말 좋은 생각이 아니다!
}

foo();

function foo() {
    "use strict";
    undefined = 2; // 타입 에러 발생!
}

foo();



// void 연산자

var a = 42;

console.log( void a, a ); // undefined 42



function doSomething() {
    // 참고: 'APP.ready'는 이 애플리케이션에서 제공한 값이다.
    if (!APP.ready) {
	// 나중에 다시 해보자!
	return void setTimeout( doSomething,100 );
    }

    var result;

    // 별도 처리 수행
    return result;
}

// 제대로 처리했나?
if (doSomething()) {
    // 다음 작업 바로 실행
}



if (!APP.ready) {
    // 나중에 다시 해보자!
    setTimeout( doSomething,100 );
    return;
}
