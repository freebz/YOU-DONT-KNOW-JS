var steps = something( .. )
.then( .. )
.then( function(..){
    // ...

    // 연쇄를 확장한다.
    steps = steps.then( .. );

    // ...
})
.then( .. );
