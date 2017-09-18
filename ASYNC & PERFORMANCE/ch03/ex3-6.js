function foo(x) {
    // 먼가 시간이 제법 걸리는 일을 시작한다.

    // 이벤트 구독기를 생성하여 반환한다.

    return listener;
}

var evt = foo( 42 );

evt.on( "completion", function(){
    // 이제 다음 단계로 갈 수 있다!
} );
evt.on( "failure", function(){
    // 어랏, 'foo()'에서 뭔가 잘못됐다!
} );
