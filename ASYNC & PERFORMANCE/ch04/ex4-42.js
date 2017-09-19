// 'request( )'는 프라미스-인식형 유틸리티다.

var res = [];

runAll(
    function*(){
	var p1 = request( "http://some.url.1" );

	// 제어권 넘김
	yield;

	res.push( yield p1 );
    },
    function*(){
	var p2 = request( "http://some.url.2" );

	// 제어권 넘김
	yield;

	res.push( yield p2 );
    }
);
