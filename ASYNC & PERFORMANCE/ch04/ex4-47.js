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



var fooThunkory = thunkify( foo );

var fooThunk1 = fooThunkory( 3, 4 );
var fooThunk2 = fooThunkory( 5, 6 );

// 나중에

fooThunk1( function(sum) {
    console.log( sum ); // 7
} );

fooThunk2( function(sum) {
    console.log( sum ); // 11
} );
