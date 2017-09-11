function foo(el) {
    console.log( el, this.id );
}

var obj = {
    id: "멋진 남자"
};

// 'foo()' 호출 시 'obj'를 'this'로 사용한다.
[1, 2, 3].forEach( foo, obj );
// 1 멋진 남자 2 멋진 남자 3 멋진 남자
