// 5.3 이제 나는 볼 수 있다

function wait(message) {
    setTimeout( function timer(){
	console.log( message );
    }, 1000 );
}

wait( "Hello, closure!" );
