function foo(num) {
    console.log( "foo: " + num );

    // 'foo'가 몇 번 호출됐는지 추적한다.
    // 참고: 'this'는 'foo'를 어떻게 호출하느냐에 따라 진짜 'foo'가 된다.
    this.count++;
}

foo.count = 0;
var i;

for (i = 0; i<10; i++) {
    if ( i > 5) {
	// 'call()' 함수로 호출하므로
	// 'this'는 이제 확실히 함수 객체 'foo' 자신을 가리킨다.
	foo.call( foo, i );
    }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// 'foo'는 몇 번 호출됐을까?
console.log( foo.count ); // 4
