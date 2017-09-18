function delay(time) {
    return new Promise( function(resolve,reject){
	setTimeout( resolve, time );
    } );
}

delay( 100 ) // 1번 단계
.then( function STEP2(){
    console.log( "2번 단계 (100ms 후)" );
    return delay( 200 );
} )
.then( function STEP3(){
    console.log( "3번 단계 (200ms 더 경과 후)" );
} )
.then( function STEP4(){
    console.log( "4번 단계 (다음 작업)" );
    return delay( 50 );
} )
.then( function STEP5(){
    console.log( "5번 단계 (50ms 더 경과 후)" );
} )
//...
