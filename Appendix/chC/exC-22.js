ASQ(
    "http://some.url.2"
)
.runner(
    function*(token){
	// 제어권을 넘겨줌
	yield token;

	var url1 = token.messages[0]; // "http://some.url.1"

	// 처음부터 다시 시작하기 위해 메시지를 비운다.
	token.messages = [];

	var p1 = request( url1 );

	// 제어권을 넘겨줌
	yield token;

	token.messages.push( yield p1 );
    },

    function*(token){
	var url2 = token.messages[0]; // "http://some.url.2"

	// 메시지를 전달 후 제어권을 넘겨줌
	token.messages[0] = "http://some.url.1";
	yield token;

	var p2 = request( url2 );

	// 제어권을 넘겨줌
	yield token;

	token.messages.push( yield p2 );

	// 결과를 시퀀스 다음 단계로 전달한다.
	return token.messages;
    }
)

.val( function(res){
    // 'res[0]'는 "http://some.url.1"의 결과다.
    // 'res[1]'는 "http://some.url.2"의 결과다.
} );
