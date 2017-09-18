click( "#mybtn", function(evt){
    var btnId = evt.currentTarget.id;

    request( "http://some.url.1/?id=" + btnId )
    .then( function(text){
	console.log( text );
    } );
} );
