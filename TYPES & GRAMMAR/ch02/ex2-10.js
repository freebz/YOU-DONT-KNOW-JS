// 2.5 값 vs 레퍼런스

var a = 2;
var b = a; // 'b'는 언제나 'a'에서 값을 복사한다.
b++;
a; // 2
b; // 3

var c = [1,2,3];
var d = c; // 'd'는 공유된 '[1,2,3]'값의 레퍼런스다.
d.push( 4 );
c; // [1,2,3,4]
d; // [1,2,3,4]



var a = [1,2,3];
var b = a;
a; // [1,2,3]
b; // [1,2,3]

// 그 후
b = [4,5,6];
a; // [1,2,3]
b; // [4,5,6]



function foo(x) {
    x.push( 4 );
    x; // [1,2,3,4]

    // 그 후
    x = [4,5,6];
    x.push( 7 );
    x; // [4,5,6,7]
}

var a = [1,2,3];

foo( a );

a; // [4,5,6,7]이 아닌 [1,2,3,4]



function foo(x) {
    x.push( 4 );
    x; // [1,2,3,4]

    // 그 후
    x.length = 0; // 기존 배열을 즉시 비운다
    x.push( 4, 5, 6, 7 );
    x; // [4,5,6,7]
}

var a = [1,2,3];

foo( a );

a; // [1,2,3,4]가 아닌 [4,5,6,7]



foo( a.slice() );



function foo(wrapper) {
    wrapper.a = 42;
}

var obj = {
    a: 2
};

foo( obj );

obj.a; // 42



function foo(x) {
    x = x + 1;
    x; // 3
}

var a = 2;
var b = new Number( a ); // 'Object(a)'도 같은 표현이다.

foo( b );
console.log( b ); // 3이 아닌 2
