ASQ.react( function setup(next){
    document.getElementById( "mybtn" )
    .addEventListener( "click", next, false );
} )
.seq( function(evt){
    var btnID = evt.target.id;
    return request(
	"http://some.url.1/?id=" + btnID
    );
} )
.val( function(text){
    console.log( text );
} );
