// let 반복문

for (let i=0; i<10; i++) {
    console.log( i );
}

console.log( i ); // ReferenceError



{
    let j;
    for (j=0; j<10; j++) {
	let i = j; // re-bound for each iteration!
	console.log( i );
    }
}



var foo = true, baz = 10;

if (foo) {
    var bar = 3;
    if (baz > bar) {
	console.log( baz );
    }

    // ...
}



var foo = true, baz = 10;

if (foo) {
    var bar = 3;
    // ...
}

if (baz > bar) {
    console.log( baz );
}



var foo = true, baz = 10;

if (foo) {
    let bar = 3;

    if (baz > bar) { // don't forget `bar` when moving!
	console.log( baz );
    }
}
