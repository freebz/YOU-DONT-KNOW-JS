// 'someEventStream'은 마우스 클릭과 비슷한 이벤트 스트림이다.
var observer = new Observer( someEventStream, function*(){
    while (var evt = yield) {
	console.log( evt );
    }
} );
