function foo(cb) {
    setTimeout( function(){
	try {
	    var x = baz.bar();
	    cb( null, x ); // 이룸!
	}
	catch (err) {
	    cb( err );
	}
    }, 100 );
}

foo( function(err,val){
    if (err) {
	console.error( err ); // 이런... ㅜㅜ
    }
    else {
	console.log( val );
    }
} );
