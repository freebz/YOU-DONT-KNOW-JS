var ASQ = require('asynquence');
require('asynquence-contrib');

function double(x) {
    x *= 2;

    // 계속 확장해야 하는가?
    if (x < 500) {
	isq.then( double );
    }

    return x;
}

// 단일-단계 이터러블 시퀀스를 만든다.
var isq = ASQ.iterable().then( double );

for (var v = 10, ret;
     (ret = isq.next( v )) && !ret.done;
) {
    v = ret.value;
    console.log( v );
}
