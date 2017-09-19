function foo(x,y) {
    return request(
	"http://some.url.1/?x=" + x + "&y=" + y
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

var p = it.next().value;

// 'p' 프라미스가 귀결될 때까지 기다린다.
p.then(
    function(text){
	it.next( text );
    },
    function(err){
	it.throw( err );
    });
