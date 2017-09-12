var myObject = {
    // 'a'의 게터를 정의한다.
    get a() {
	return this._a_;
    },

    // 'a'의 세터를 정의한다.
    set a(val) {
	this._a_ = val * 2;
    }
};

myObject.a = 3;

myObject.a; // 4
