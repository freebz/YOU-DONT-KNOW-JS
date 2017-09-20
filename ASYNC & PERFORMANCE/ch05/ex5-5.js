// 공유 워커 내부에서
addEventListener( "connect", function(evt){
    // 이 접속에 할당된 포트
    var port = evt.ports[0];

    port.addEventListener( "message", function(evt){
	// ...

	port.postMessage( .. );

	// ...
    } );

    // 포트 접속을 초기화한다.
    port.start();
} );
