// 'click()'은 '"click"' 이벤트를 DOM 요소에 바인딩 한다.
// 'request()'는 앞에서 정의한 프라미스-인식형 AJAX 요청이다.

var p = new Promise( function(resolve,reject){
    click( "#mybtn", resolve );
} );

p.then( function(evt){
    var btnID = evt.currentTarget.id;
    return request( "http://some.url.1/?id=" + btnID );
} )
.then( function(text){
    console.log( text );
} );
