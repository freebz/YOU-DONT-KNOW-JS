var p = Promise.reject( "허걱" ).defer();

// 'foo( )'는 프라미스-인식형 함수다
foo( 42 )
.then(
    function fulfilled(){
	return p;
    },
    function rejected(err){
	// 'foo( )' 에러 처리
    }
);
//...
