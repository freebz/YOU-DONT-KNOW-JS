var w1 = new Worker( "http://some.url.1/mycoolworker.js" );


w1.addEventListener( "메시지", function(evt){
    // evt.data
} );


w1.postMessage( "아주 재미난 애기" );


// "mycoolworker.js"

addEventListener( "메시지", function(evt){
    // evt.data
} );

postMessage( "정말 쿨한 대답" );
