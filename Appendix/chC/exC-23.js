var ASQ = require('asynquence');
require('asynquence-contrib');

function state(val,handler) {
    // 이 상태에 대한 코루틴 처리기를 생성한다.
    return function*(token) {
	// 상태 전이 처리기
	function transition(to) {
	    token.messages[0] = to;
	}

	// 초기 상태를 설정한다. (아직 설정되지 않았다면)
	if (token.messages.length < 1) {
	    token.messages[0] = val;
	}

	// 최종 상태(false)에 이를 때까지 계속한다.
	while (token.messages[0] !== false) {
	    // 현재 상태가 이 처리기에 해당하는가?
	    if (token.messages[0] == val) {
		// 상태 처리기를 위임한다.
		yield *handler( transition );
	    }

	    // 다른 상태 처리기로 제어권을 넘길까?
	    if (token.messages[0] !== false) {
		yield token;
	    }
	}
    };
}


var prevState;

ASQ(
    /* 선택적: 초기 상태값 */
    2
)

// 상태: 기계를 실행한다.
// 전이: 2 -> 3 -> 1 -> 3 -> false
.runner(
    // 상태 '1' 처리기
    state( 1, function *stateOne(transition){
	console.log( "상태 1" );

	prevState = 1;
	yield transition( 3 ); // 상태: '3'으로 간다.
    } ),

    // 상태 '2' 처리기
    state( 2, function *stateTwo(transition){
	console.log( "상태 2" );

	prevState = 2;
	yield transition( 3 ); // 상태 '3'으로 간다.
    } ),

    // 상태 '3' 처리기
    state( 3, function *stateThree(transition){
	console.log( "상태 3" );

	if (prevState === 2) {
	    prevState = 3;
	    yield transition( 1 ); // 상태 '1'로 간다.
	}
	// 다 끝났다!
	else {
	    yield "여기까지입니다!";

	    prevState = 3;
	    yield transition( false ); // 마지막 상태
	}
    } )
)

// 상태 기계가 완료되면 다음 코드를 실행한다.
.val( function(msg){
    console.log( msg ); // 여기까지입니다!
} );
