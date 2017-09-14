var res = [];

function response(data) {
    if (data.url == "http://some.url.1") {
	res[0] = data;
    }
    else if (data.url == "http://some.url.2") {
	res[1] = data;
    }
}

// ajax( )는 라이브러리에 있는 임의의 AJAX 함수다.
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
