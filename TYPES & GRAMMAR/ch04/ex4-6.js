// 날짜 -> 숫자

var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );
+d; // 1408369986000



var timestamp = +new Date();


timestamp = + new Date;



var timestamp = new Date().getTime();
// var timestamp = (new Date()).getTime();
// var timestamp = (new Date).getTime();



var timestamp = Date.now();



if (!Date.now) {
    Date.now = function() {
	return +new Date();
    };
}

