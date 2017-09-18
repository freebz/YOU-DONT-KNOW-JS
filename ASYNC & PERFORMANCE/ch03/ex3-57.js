var p1 = new Promise( function(resolve,reject){
    reject( "허걱" );
} );

var p2 = Promise.reject( "허걱" );
