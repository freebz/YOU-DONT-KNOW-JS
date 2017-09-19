function *main() {
    var x = yield "Hello World";
    yield x.toLowerCase(); // 예외를 일으킨다!
}

var it = main();

it.next().value; // Hello World

try {
    it.next( 42 );
}
catch (err) {
    console.error( err ); // TypeError
}
