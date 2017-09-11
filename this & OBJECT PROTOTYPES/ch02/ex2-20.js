if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
	if (typeof this !== "function") {
	    // ECMAScript 5의 내부 함수 IsCallable를 최대한 비슷하게 흉내 낸 것이다.
	    throw new TypeError(
		"Function.prototype.bind - 바인딩 하려는 대상이" + "호출 가능하지 않습니다."
	    );
	}

	var aArgs = Array.prototype.slice.call( arguments, 1 ),
	    fToBind = this,
	    fNOP = function(){},
	    fBound = function(){
		return fToBind.apply(
		    (
			this instanceof fNOP &&
			    oThis ? this : oThis
		    ),
		    aArgs.concat(
			Array.prototype.slice.call( arguments )
		    );
		)
	    };
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();
	
	return fBound;
    };
}
