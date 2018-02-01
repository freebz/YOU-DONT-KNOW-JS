// 부록 A. 4.1 심/폴리필

if (!Array.prototype.foobar) {
    // 정말 어리석군!
    Array.prototype.foobar = function() {
	this.push( "foo", "bar" );
    };
}
