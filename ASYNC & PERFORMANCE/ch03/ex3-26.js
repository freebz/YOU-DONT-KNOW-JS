var p = Promise.resolve( 21 );

p
.then( function(v){
    console.log( v ); // 21

    // 연쇄된 프라미스를 이룸 (결괏값은 '42')
    return v * 2;
} )
// 프라미스 연쇄
.then( function(v){
    console.log( v ); // 42
} );
