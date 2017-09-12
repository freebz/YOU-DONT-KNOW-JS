var myObject = {
    // 'a'의 게터를 정의한다.
    get a() {
	return 2;
    }
};

Object.defineProperty(
    myObject,          // 타깃
    "b",	       // 프로퍼티명
    {		       // 서술자
	// 'b'의 게터를 정의한다.
	get: function() { return this.a * 2 },

	// 'b'가 객체 프로퍼티로 확실히 표시되게 한다.
	enumerable: true
    }
);

myObject.a; // 2
myObject.b; // 4
