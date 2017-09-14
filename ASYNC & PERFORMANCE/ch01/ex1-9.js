var res = [];

function response(data) {
    res.push( data );
}
// ajax( )는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
