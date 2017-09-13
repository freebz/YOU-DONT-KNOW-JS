if (!Object.create) {
    Object.create = function(o) {
	function f( ){ }
	F.prototype = o;
	return new F( );
    };
}
