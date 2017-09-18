function foo(x,y,cb) {
    ajax(
	"http://some.url.1/?x=" + x + "&y=" + y,
	cb
    ); }
foo( 11, 31, function(err,text) {
    if (err) {
	console.error( err );
    }
    else {
	console.log( text );
    }
} );
