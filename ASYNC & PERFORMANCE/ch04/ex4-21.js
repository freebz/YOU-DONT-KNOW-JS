function *main() {
    var x = yield "Hello World";

    // 이 코드는 실행되지 않는다.
    console.log( x );
}

var it = main();

it.next();

try {
    // '*main()'은 이 에러를 처리할까? 한번 보자!
    it.throw( "허걱" );
}
catch (errr) {
    // 아니다. 처리하지 않았다!
    console.error( err ); // 허걱
}
