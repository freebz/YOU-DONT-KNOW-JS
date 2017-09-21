var ready;

var domready = new Promise( function(resolve,reject){
    // 'resolve()' 기능을 추출한다.
    ready = resolve;
} );

// ...
domready.then( function(){
    // DOM 준비 완료!
} );

// ...

document.addEventListener( "DOMContentLoaded", ready );
