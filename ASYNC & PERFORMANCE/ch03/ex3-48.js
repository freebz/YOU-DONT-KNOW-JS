// 'request( )'는 앞에서 정의한 것과 비슷한
// 프라미스-인식형 AJAX 유틸리티다.

var p1 = request( "http://some.url.1/" );
var p2 = request( "http://some.url.2/" );

Promise.race( [p1,p2] )
.then( function(msg){
    // 'p1', 'p2' 둘 중 하나는 경합의 승자가 될 것이다.
    return request(
	"http://some.url3/?v=" + msg
    );
} )
.then( function(msg){
    console.log( msg );
} );
