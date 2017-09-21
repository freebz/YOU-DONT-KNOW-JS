var foo = 41;

(function(){
    (function(){
	(function(baz){
	    var bar = foo + baz;
	    // ...
	})(1);
    })();
})();
