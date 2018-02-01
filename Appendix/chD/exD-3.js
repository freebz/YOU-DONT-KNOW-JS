// 부록 A.4 네이티브 프로토타입

// 넷스케이프 4는 Array.push 메서드가 없다.
Array.prototype.push = function(item) {
    this[this.length] = item;
};



if (!Array.prototype.push) {
    // 넷스케이프 4는 Array.push 메서드가 없다.
    Array.prototype.push = function(item) {
	this[this.length] = item;
    };
}



// Array.prototype.push를 믿지 마라.
(function(){
    if (Array.prototype.push) {
	var a = [];
	a.push(1,2);
	if (a[0] === 1 && a[1] === 2) {
	    // 테스트가 성공했으니 안심하고 사용하자!
	    return;
	}
    }

    throw Error(
	"Array#push()는 없거나 깨졌어!"
    );
})();
