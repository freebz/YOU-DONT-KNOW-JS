var p1 = Promise.resolve( 21 );
var p2 = Promise.resolve( 42 );
var p3 = Promise.reject( "허걱" );

// 리스트에 있는 값이 프라미스에 있더라도 2를 곱한다.
Promise.map( [p1,p2,p3], function(pr,done){
    // 원소 자체를 확실히 프라미스로 만든다.
    Promise.resolve( pr )
    .then(
	// 'v'로 값을 추출한다.
	function(v){
	    // 이루어진 'v'를 새로운 값으로 매핑한다.
	    done( v * 2 );
	},
	// 아니면, 프라미스 버림 메시지로 매핑한다.
	done
    );
} )
.then( function(vals){
    console.log( vals ); // [42,84,"허걱"]
} );
