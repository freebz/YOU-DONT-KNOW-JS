class C {
    constructor() {
	this.num = Math.random();
    }
    rand() {
	console.log( "난수: " + this.num );
    }
}

var c1 = new C();
c1.rand(); // "난수: 0.4324299..."

C.prototype.rand = function() {
    console.log( "난수: " + Math.round( this.num * 1000 ));
};

var c2 = new C();
c2.rand(); // "난수: 867"

c1.rand(); // "난수: 432" -- 어이쿠!!!
