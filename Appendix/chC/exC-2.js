var ASQ = require('asynquence');
require('asynquence-contrib');

var steps = ASQ.iterable();

steps
.then( function STEP1(x){
    return x * 2;
} )
.then( function STEP2(x){
    return x + 3;
} )
.then( function STEP3(x){
    return x * 4;
} );

steps.next( 8 ).value; // 16
steps.next( 16 ).value; // 19
steps.next( 19 ).value; // 76
steps.next().done; // true
