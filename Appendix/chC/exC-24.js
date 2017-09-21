var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');
eval(fs.readFileSync('run.js')+'');

var channel = ASQ.csp.chan;
var take = ASQ.csp.take;
var put = ASQ.csp.put;


var ch = channel();

function *foo() {
    var msg = yield take( ch );
    console.log( msg );
}

function *bar() {
    yield put( ch, "Hello World" );

    console.log( "메시지 보냈어요!" );
}

run( foo );
run( bar );
// Hello World
// "메시지 보냈어요!"
