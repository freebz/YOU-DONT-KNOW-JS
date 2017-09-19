function foo(x,y) {
    ajax(
	"http://some.url.1/?x=" + x + "&y=" + y,
	function(err,data){
	    if (err) {
		// '*main()'으로 에러를 던진다.
		it.throw( err );
	    }
	    
	    else {
		// 수신한 'data'로 '*main()'을 재개한다.
		it.next( data );
	    }
	}
    );
}

function *main() {
    try {
	var text = yield foo( 11, 31 );
	console.log( text );
    }
    catch (err) {
	console.error( err );
    }
}

var it = main();

// 모두 시작한다!
it.next();
