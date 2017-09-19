// ...
// 썽크를 돌려받았는가?
else if (typeof next.value == "function") {
    return new Promise( function(resolve,reject){
	// 에러-우선 콜백으로 썽크를 부른다.
	next.value( funtion(err,msg) {
	    if (err) {
		reject( err );
	    }
	    else {
		resolve( msg );
	    }
	} );
    } )
    .then(
	handleNext,
	function handleErr(err) {
	    return Promise.resolve(
	    it.throw( err )
	    )
		.then( handleResult );
	}
    );
}
