// 3.4.3 let

var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}

console.log( bar ); // ReferenceError



var foo = true;

if (foo) {
    { // <- explicit block
	let bar = foo * 2;
	bar = something( bar );
	console.log( bar );
    }
}

console.log( bar ); // ReferenceError



{
    console.log( bar ); // ReferenceError!
    let bar = 2;
}
