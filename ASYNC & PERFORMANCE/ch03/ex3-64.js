function getY(x) {
    return new Promise( function(resolve,reject){
	setTimeout( function(){
	    resolve( (3 * x) - 1 );
	}, 100 );
    } );
}

function foo(bar,baz) {
    var x = bar * baz;

    // 두 프라미스를 반환한다.
    return [
	Promise.resolve( x ),
	getY( x )
    ];
}

function spread(fn) {
    return Function.apply.bind( fn, null );
}

Promise.all(
    foo( 10, 20 )
)
.then(
    spread( function(x,y) {
	console.log( x, y ); // 200 599
    } )
)
