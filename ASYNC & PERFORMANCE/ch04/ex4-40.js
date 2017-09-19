var it1 = reqData( "http://some.url.1" );
var it2 = reqData( "http://some.url.2" );

var p1 = it1.next();
var p2 = it2.next();

p1
.then( function(data) {
    it1.next( data );
    return p2;
} )
.then( function(data) {
    it2.next( data );
} );
