var myObject = {
    // 'a'의 게터를 정의한다.
    get a() {
	return 2;
    }
};

myObject.a = 3;

myObject.a; // 2
