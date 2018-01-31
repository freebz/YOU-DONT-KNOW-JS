// 5.3 세미콜론 자동 삽입

var a = 42, b
c;



var a = 42, b = "foo";

a
b // "foo"



var a = 42;
do {
    // ...
} while (a) // <- ;를 빼먹었군!
a;



var a = 42;

while (a) {
    // ...
} // <- ;는 굳이 필요 없군!
a;



function foo(a) {
    if (!a) return
    a *= 2;
    // ...
}



function foo(a) {
    return (
	a * 2 + 3 / 12
    );
}
