// 3.4 네이티브, 나는 생성자다

// 3.4.1 Array()

var a = new Array( 1, 2, 3 );
a; // [1, 2, 3]

var b = [1, 2, 3];
b; // [1, 2, 3]



var a = new Array( 3 );

a.length; // 3
a;



var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
var c = [];
c.length = 3;

a;
b;
c;



// var a = new Array( 3 );
// var b = [ undefined, undefined, undefined ];

a.join( "-" ); // "--"
b.join( "-" ); // "--"

a.map(function(v,i){ return i; }); // [ undefined x 3 ]
b.map(function(v,i){ return i; }); // [ 0, 1, 2 ]



function fakeJoin(arr,connector) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
	if (i > 0) {
	    str += connector;
	}
	if (arr[i] !== undefined) {
	    str += arr[i];
	}
    }
    return str;
}

var a = new Array( 3 );
fakeJoin( a, "-" ); // "--"



var a = Array.apply( null, { length: 3 } );
a; // [ undefined, undefined, undefined ]
