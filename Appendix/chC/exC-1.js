var domready = ASQ.iterable();

// ...

domready.val( function(){
    // DOM 준비 완료
} );

// ...

document.addEventListener( "DOMContentLoaded", domready.next );
