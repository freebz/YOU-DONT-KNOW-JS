function foo(x,y,cb) {
    setTimeout( function(){
	cb( x + y );
    }, 1000 );
}



function thunkify(fn) {
    return function() {
	var args = [].slice.call( arguments );
	return function(cb) {
	    args.push( cb );
	    return fn.apply( null, args );
	};
    };
}



var whatIsThis = thunkify( foo );

var fooThunk = whatIsThis( 3, 4 );

// 나중에
fooThunk( function(sum) {
    console.log( sum ); // 7
} );
