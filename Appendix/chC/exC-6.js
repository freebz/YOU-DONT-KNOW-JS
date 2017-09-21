.gate(
    function STEP2a(done,resp) {
	request( "http://some.url.2/?v=" + resp )
	.pipe( done );
    },
    function STEP2b(done,resp) {
	request( "http://some.url.3/?v=" + resp )
	.pipe( done );
    }
)
