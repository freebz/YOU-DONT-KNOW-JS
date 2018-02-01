// 3.4 스코프 역할을 하는 블록

for (var i=0; i<10; i++) {
    console.log( i );
}



var foo = true;

if (foo) {
    var bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}



for (var i=0; i<10; i++) {
    console.log( i );
}
