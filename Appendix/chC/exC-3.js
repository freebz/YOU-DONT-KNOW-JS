var ASQ = require('asynquence');
require('asynquence-contrib');

var steps = ASQ.iterable();

steps
.then( function STEP1(){ return 2; } )
.then( function STEP2(){ return 4; } )
.then( function STEP3(){ return 6; } )
.then( function STEP4(){ return 8; } )
.then( function STEP5(){ return 10; } )

for (var v of steps) {
    console.log( v );
}
// 2 4 6 8 10
