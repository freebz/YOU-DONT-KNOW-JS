// 참고: 여기서 'domready'는 시퀀스를 제어하는 이터레이터다.
var domready = ASQ.iterable();

// ...

domready.val( function(){
    // DOM 준비 완료
} );

// ...

document.addEventListener( "DOMContentLoaded", domready.next );
