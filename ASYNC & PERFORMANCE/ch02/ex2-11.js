function response(err,data) {
    // 에러인가?
    if (err) {
	console.error( err );
    }
    // 아니면 성공한 것으로 본다.
    else {
	console.log( data );
    }
}

ajax( "http://some.url.1", response );
