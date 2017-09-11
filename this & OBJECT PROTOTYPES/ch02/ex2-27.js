if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
	var fn = this;
	// 커링된 인자는 죄다 포착한다.
	var curried = [].slice.call( arguments, 1 );
	var bound = function() {
	    return fn.apply(
		(!this || this === (window || global)) ?
		    obj : this,
		curried.concat.apply( curried, arguments )
	    );
	};
	bound.prototype = Object.create( fn.prototype );
	return bound;
    };
}


function foo() {
    console.log("name: " + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind( obj );

fooOBJ(); // name: obj

obj2.foo = foo.softBind( obj );
obj2.foo(); // name: obj2         ← 여기 주목!!!

fooOBJ.call( obj3 ); //name: obj3 ← 여기 주목!

setTimeout( obj2.foo, 10);
// name: obj                      ← 소프트 바인딩이 적용됐다.
