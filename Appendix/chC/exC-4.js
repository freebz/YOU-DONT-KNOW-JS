// 시퀀스-인식형 AJAX
var request = ASQ.wrap( ajax );

ASQ( "http://some.url.1" )
.runner(
    ASQ.iterable()

    .then( function STEP1(token){
	var url = token.messages[0];
	return request( url );
    } )

    .then( function STEP2(resp){
	return ASQ().gate(
	    request( "http://some.url.2/?v=" + resp ),
	    request( "http://some.url.3/?v=" + resp )
	);
    } )

    .then( function STEP3(r1,r2){ return r1 + r2; } )
)
.val( function(msg){
    console.log( msg );
} );
