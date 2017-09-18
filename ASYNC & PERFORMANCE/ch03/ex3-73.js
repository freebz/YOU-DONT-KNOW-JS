// 'ajax()'에 대해 프리미서리를 만든다.
var request = Promise.wrap( ajax );

// 'foo()'를 리리팩토링한다. 하지만 당장은 다른 부분의 코드와의
// 호환성을 위해 외부적으로 콜백 기반 체제를 유지한다.
// 'request()'의 프라미스는 오직 내부적으로만 사용한다.
function foo(x,y,cb) {
    request(
	"http://some.url.1/?x=" + x + "&y=" + y)
    .then(
	function fulfilled(text){
	    cb( null, text );
	},
	cb
    );
}

// 이제 이 예제의 목적인
// 'foo()'에 대한 프라미서리를 만든다.
var betterFoo = Promise.wrap( foo );

// 그리고 프라미서리를 사용한다.
betterFoo( 11, 31)
.then(
    function fulfilled(text) {
	console.log( text );
    },
    function rejected(err){
	console.error( err );
    }
);
