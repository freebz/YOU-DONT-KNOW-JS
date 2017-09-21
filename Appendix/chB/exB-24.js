var coolUtility = ASQ.wrap( someAsyncFuncWithCB );

coolUtility( 1, 2 )

.val( function(msg){
    // ...
} )

.or function(err){
    // ...
} );
