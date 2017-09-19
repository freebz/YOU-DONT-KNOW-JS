function foo(x,y) {
    return request(
	"http://some.url.1/?x=" + x + "&y=" + y
    );
}

foo( 11, 31 )
.then(
    function(text){
	console.log( text );
    },
    function(err){
	console.error( err );
    }
);
