// 3.3.1 익명 vs 기명

setTimeout( function(){
    console.log("I waited 1 second!");
}, 1000 );



setTimeout( function timeoutHandler(){ // <- Look, I have a name!
    console.log( "I waited 1 second!" );
}, 1000 );
