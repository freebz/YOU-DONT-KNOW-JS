var a = 1;
var b = 2;

function *foo() {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
}

function *bar() {
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
}



function step(gen) {
    var it = gen();
    var last;

    return function() {
	// 어떤 값이 'yield'되어 나오든지
	// 바로 다음에 그냥 반환한다.
	last = it.next( last ).value;
    };
}



// 'a'와 'b'를 리셋한다.
a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar );

s2(); // b--;
s2(); // yield 8
s1(); // a++;
s2(); // a = 8 + b;
   // yield 2
s1(); // b = b * a;
   // yield b
s1(); // a = b + 3;
s2(); // b = a * 2;


console.log( a, b ); // 12 18
