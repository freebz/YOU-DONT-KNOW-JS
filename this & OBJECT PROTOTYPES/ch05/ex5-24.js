var anotherObject = {
    cool: function() {
	console.log( "좋아!" );
    }
};

var myObject = Object.create( anotherObject );
myObject.cool(); // "좋아!"
