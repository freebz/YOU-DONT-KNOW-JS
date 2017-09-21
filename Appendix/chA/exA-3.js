class C {
    constructor() {
	// 인스넡스에 가려진 프로퍼티를 세팅하지 않고
	// 반드시 공유된 상태를 수정하도록 유의하자!
	C.prototype.count++;

	// 자, 'this.count'는 위임을 통해 예상대로 작동한다.
	console.log( "테스트: " + this.count );
    }
}

// 공유된 상태를 나타내는 프로퍼티를 프로퍼티 객체에 직접 추가한다.
C.prototype.count = 0;

var c1 = new C();
// 테스트: 1

var c2 = new C();
// 테스트: 2

c1.count === 2;			// true
c1.count === c2.count;		// true
