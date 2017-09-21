var main = ASQ( {
    url: "http://some.url.1",
    format: function STEP4(text){
	return text.toUpperCase();
    }
} )
.runner( steps )
.val( function(msg){
    console.log( msg );
} );
