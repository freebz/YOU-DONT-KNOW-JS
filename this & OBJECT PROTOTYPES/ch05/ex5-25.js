var anotherObject = {
    cool: function() {
	console.log( "좋아!" );
    }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
    this.cool(); // 내부 위임이다!
};

myObject.doCool(); // "좋아!"
