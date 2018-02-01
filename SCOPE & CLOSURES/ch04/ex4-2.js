// 4.2 컴파일러는 두 번 공격한다

var a;
a = 2;
console.log( a );



var a;
console.log( a );
a = 2;



foo();

function foo() {
    console.log( a ); // undefined
    var a = 2;
}



function foo() {
    var a;
    console.log( a ); // undefined
    a = 2;
}

foo();



foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    // ...
};



foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
    // ...
};



var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
    var bar = ...self...
    // ...
}
