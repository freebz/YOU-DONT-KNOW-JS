function add(getX,getY,cb) {
    var x, y;
    getX( function(xVal){
	x = xVal;
	// 둘 다 준비됐나?
	if (y != undefined) {
	    cb( x + y ); // 더해서 보내
	}
    } );
    getY( function(yVal){
	y = yVal;
	// 둘 다 준비됐나?
	if (x != undefined) {
	    cb( x + y ); // 더해서 보내
	}
    } );
}

// 'fetchX()'와 'fetchY()'는 동기/비동기 함수
add (fetchX, fetchY, function(sum){
    console.log( sum ); // 너무 쉽지?
} );
