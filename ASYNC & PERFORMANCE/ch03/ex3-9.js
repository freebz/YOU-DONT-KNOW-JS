function bar(fooPromise) {
    // 'foo( )'의 완료 여부를 리스닝한다.
    fooPromise.then(
	function(){
	    // 'foo( )'는 이제 'bar( )' 작업을 한다.
	},
	function(){
	    // 어랏, 'foo( )'에서 뭔가 잘못됐다.
	}
    );
}

// 'baz( )'도 마찬가지!
