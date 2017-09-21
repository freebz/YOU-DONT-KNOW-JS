var p = Promise.resolve( 21 );

// 분기 1 ('p'에서)
p.then( function(msg){
    return msg * 2;
} )
.then( function(msg){
    console.log( msg ); // 42
} )

// 분기 2 ('p'에서)
p.then( function(msg){
    console.log( msg ); // 21
} );
