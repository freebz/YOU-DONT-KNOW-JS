// 'request( )'는 앞에서 정의한 것과 비슷한
// 프라미스-인식형 AJAX 유틸리티다.

var p1 = request( "http://some.url.1/" );
var p2 = request( "http://some.url.2/" );

Promise.all( [p1,p2] )
.then( function(msgs){
    // 'p1', 'p2' 둘 다 이루어져
    // 여기에 메시지가 전다로딘다.
    return request(
	"http://some.url3/?v=" + msgs.join(",")
    );
} )
.then( function(msg){
    console.log( msg );
} );
