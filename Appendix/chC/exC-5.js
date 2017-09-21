ASQ( "http://some.url1" )
.seq( /*1단계*/ reqeust )
.seq( function STEP2(resp){
    return ASQ().gate(
	request( "http://some.url.2/?v=" + resp ),
	request( "http://some.url.3/?v=" + resp )
    );
} )
.val( function STEP3(r1,r2){ return r1 + r2; } )
.val( function(msg){
    console.log( msg );
} );
