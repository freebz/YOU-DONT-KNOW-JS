var myObject = {
    a: 2,
    b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
	var o = this;
	var idx = 0;
	var ks = Object.keys( o );
	return {
	    next: function() {
		return {
		    value: o[ks[idx++]],
		    done: (idx > ks.length)
		};
	    }
	};
    }
} );

// 'myObject'를 수종으로 순회한다.
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }

// 'myObject'를 'for..of' 루프로 순회한다.
for (var v of myObject) {
    console.log( v );
}
// 2
// 3
