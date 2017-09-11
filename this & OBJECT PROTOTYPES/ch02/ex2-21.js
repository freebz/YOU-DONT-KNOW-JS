function foo(p1,p2) {
    this.val = p1 + p2;
}

// 'null'을 입력한 건 여기서 'this' 하드 바인딩은
// 어차피 'new' 호출 시 오버라이드되므로 신경 쓰지 않겠다는 의미다.
var bar = foo.bind( null, "p1" );

var baz = new bar( "p2 ");

baz.val; // p1p2
