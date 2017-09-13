var anotherObject = {
    a: 2
};

// 'anotherObject'에 연결된 객체를 생성한다.
var myObject = Object.create( anotherObject );

for (var k in myObject) {
    console.log(k + "를 발견!");
}
// a를 발견!

("a" in myObject); // true
