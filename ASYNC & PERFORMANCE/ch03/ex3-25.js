var p = Promise.resolve( 21 );

var p2 = p.then( function(v){
    console.log( v ); // 21

    // 'p2'는 이룸 (결괏값 '42')
    return v * 2;
} );

// 'p2'를 연쇄한다.
p2.then( function(v){
    console.log( v ); // 42
} );
