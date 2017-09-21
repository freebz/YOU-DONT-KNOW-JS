class C {
    constructor(id) {
	// 어이쿠, 함정이다!
	// 'id()' 메서드를 인스턴스의 프로퍼티 값으로 가려지게 한다.
	this.id = id;
    }
    id() {
	console.log( "Id: " + id );
    }
}

var c1 = new C( "c1" );
c1.id(); // TypeError -- 'c1.id'는 이제 문자열 "c1"이다.
