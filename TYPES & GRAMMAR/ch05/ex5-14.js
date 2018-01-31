// 5.4 에러

var a = /+foo/; // 에러!



var a;
42 = a; // 에러!



function foo(a, b, a) { } // 정상 실행

function bar(a, b, a) { "use strict"; } // 에러!



(function(){
    "use strict";

    var a = {
	b: 42,
	b: 43
    }; // 에러!
})();
