// 'eventLoop'는 큐(선입, 선출) 역활을 하는 배열이다.
var eventLoop = [ ];
var event;

// "무한" 실행!
while (true) {
    // "틱" 발생
    if (eventLoop.length > 0) {
	// 큐에 있는 다음 이벤트 조회
	event = eventLoop.shift();

	// 이제 다음 이벤트를 실행
	try {
	    event();
	}
	catch (err) {
	    reportError(err);
	}
    }
}
