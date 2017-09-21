var domready = new Promise( function(resolve,reject){
    // 지역적으로 다른 코드에 속해 있기 때문에
    // 여기에 이 코드를 넣을 일은 없다.
    document.addEventListener( "DOMContentLoaded", resolve );
} );

// ...

domready.then( function(){
    // DOM 준비 완료!
} );
