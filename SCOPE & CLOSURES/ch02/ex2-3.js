// 2.2.2 with

var obj = {
    a: 1,
    b: 2,
    c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with (obj) {
    a = 3;
    b = 4;
    c = 5;
}



function foo(obj) {
    with (obj) {
	a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo( o1 );
console.log( o1.a );    // 2

foo( o2 );
console.log( o2.a );    // undefined
console.log( a );       // 2-Oops, leaked global!
