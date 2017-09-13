// ES6 이전
// 기존 기본 'Bar.prototype'를 던져 버린다.
Bar.prototype = Object.create( Foo.prototype );

// ES6 이후
// 기존 'Bar.prototype'를 수정한다.
Object.setPrototypeOf( Bar.prototype, Foo.prototype );
