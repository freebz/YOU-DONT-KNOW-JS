function foo() {
    setTimeout( function(){
	baz.bar();
    }, 100 );
}

try {
    foo();
    // 나중에 'baz.bar()'에서 전역 에러가 발생한다.
}
catch (err) {
    // 실행되지 않는다.
}
