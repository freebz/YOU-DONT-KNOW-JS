var observable = ASQ.react( function setup(next){
    listener.on( "foobar", next );
} );


observable
.seq( .. )
.then( .. )
.val( .. );
