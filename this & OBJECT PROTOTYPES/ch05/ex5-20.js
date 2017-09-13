var foo = {
    something: function() {
	console.log( "뭔가 대단한 걸 내게 보여줘..." );
    }
};

var bar = Object.create( foo );

bar.something(); // 먼가 대단한 걸 내게 보여줘...
