add( fetch(), fetchY() )
    .then(
	// 이룸 함수
	function(sum) {
	    console.log( sum );
	},
	// 버림 함수
	function(err) {
	    console.error( err ); // 이런!
	});
