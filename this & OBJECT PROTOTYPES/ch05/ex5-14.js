// 이렇게 하는 건 소용없다!
Bar.prototype = Foo.prototype;

// 의도했던 대로 작동할진 모르겠지만 예상치 못한 부수 효과가 발생할 수수 있다.
Bar.prototype = new Foo();
