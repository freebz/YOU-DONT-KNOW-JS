function foo(x,y) {
    return x + y;
}

function fooThunk() {
    return foo( 3, 4 );
}

// 나중에

console.log( fooThunk() ); // 7
