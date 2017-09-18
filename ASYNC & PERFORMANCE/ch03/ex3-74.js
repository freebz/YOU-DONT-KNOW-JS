// 'request()' 프라미서리로 위임되므로
// 'foo()'도 이제 프라미스리다.
function foo(x,y) {
    return request(
	"http://some.url.1/?x=" + x + "&y=" y
    );
}
foo( 11, 31 )
.then( .. )
...
