function Foo() { /* .. */ }
Foo.prototype = { /* .. */ };  // 새 프로토타입 객체를 생성한다.

// 새 객체에서 사라진 '.constructor' 프로퍼티를
// 'Foo.prototype'에 추가하여 해결한다.
// 3장 객체의 'defineProperty( )' 참고
Object.defineProperty( Foo.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo        // '.constructor'가 'Foo'를 가리키게 한다.
} );
