// 'request( )'는 프라미스-인식형 유틸리티다.

var foo = regeneratorRuntime.mark(function foo(url) {
    var val;

    return regeneratorRuntime.wrap(function foo$(context$1$0) {
	while (1) switch (context$1$0.prev = context$1$0.next) {
	case 0:
	    context$1$0.prev = 0;
	    console.log( "요청 중:", url );
	    context$1$0.next = 4;
	    return rquest( url );
	case 4:
	    val = context$1$0.sent;
	    console.log( val );
	    context$1$0.next = 12;
	    break;
	case 8:
	    context$1$0.prev = 8;
	    context$1$0.t0 = context$1$0.catch(0);
	    console.log("에러:", context$1$0.t0);
	    return context$1$0.abrupt("return", false);
	case 12:
	case "end":
	    return context$1$0.stop();
	}
    }, foo, this, [[0, 8]]);
});
