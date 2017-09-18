var fulfilledTh = {
    then: function(cb) { cb( 42 ); }
};

var rejectTh = {
    then: function(cb,errCb) {
	errCb( "Oops" );
    }
};

var p1 = Promise.resolve( fulfilledTh );
var p2 = Promise.resolve( rejectedTh );

// 'p1'은 이룸 프라미스가 될 것이다.
// 'p2'은 버림 프라미스가 될 것이다.
