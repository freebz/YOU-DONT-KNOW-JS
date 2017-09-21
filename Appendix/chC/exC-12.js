var main = Promise.resolve( {
    url: "http://some.url.1",
    format: function STEP4(text){
	return text.toUpperCase();
    }
} )
.then( function(..){
    return steps; // 힌트!
} )
.val( function(msg){
    console.log( msg );
} );
