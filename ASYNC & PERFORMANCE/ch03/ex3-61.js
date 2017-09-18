// foo(), STEP2(), STEP3()은
// 모두 프라미스-인식형 유틸리티다.

var p = foo( 42 )
    .then( STEP2 )
    .then( STEP3 );



p.catch( handleErrors );
