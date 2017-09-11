// 1 new 바인딩
var bar = new foo();

// 2 명시적 바인딩
var bar = foo.call( obj2 );

// 3 암시적 바인딩
var bar = obj1.foo();

// 4 기본 바인딩
var bar = foo();
