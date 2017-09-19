// 대칭적이다: 질의자(question asker)를 생성
var fooThunkory = thunkify( foo );
var fooPromisory = promisify( foo );

// 대칭적이다: 질문(question)을 던진다.
var fooThunk = fooThunkory( 3, 4 );
var fooPromise = fooPromisory( 3, 4);

// 썽크 답변을 받는다.
fooThunk( function(err,sum){
    if (err) {
	console.error( err );
    }
    else {
	console.log( sum ); // 7
    }
} );

// 프라미스 답변을 받는다.
fooPromise
.then(
    function(sum){
	console.log( sum ); // 7
    },
    function(err){
	console.error( err );
    }
);
