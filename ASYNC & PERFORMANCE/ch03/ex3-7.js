var evt = foo( 42 );

// 'bar( )'는 'foo( )'의 완료 이벤트를 리스닝한다.
bar( evt );

// 'baz( )'도 'foo( )'의 완료 이벤트를 리스닝한다.
baz( evt );
