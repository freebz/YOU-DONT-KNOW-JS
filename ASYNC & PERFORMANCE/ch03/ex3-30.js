// 'ajsx( {url}, {callback} )' 같은 유틸리티가 있다고 하자.

// 프라미스-인식형 AJAX
function request(url) {
    return new Promise( function(resolve,reject){
	// 'ajax( )' 콜백이 이 프라미스의 'resolve( )' 함수가 된다.
	ajax( rul, resolve );
    } );
}
