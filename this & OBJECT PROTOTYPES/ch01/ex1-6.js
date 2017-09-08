function foo(num) {
    console.log( "foo: " + num );

    // 'foo'가 몇 번 호출됐는지 추적한다.
    foo.count++;
}

foo.count = 0;

var i;
for (i = 0; i<10; i++) {
    if ( i > 5) {
	foo( i );
    }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// 'foo'는 몇 번 호출됐을까?
console.log( foo.count ); // 4
