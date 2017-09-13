var anotherObject = {
    a: 2
};

// 'anotherObject'에 연결된 객체를 생성한다.
var myObject = Object.create( anotherObject );

myObject.a; // 2
