function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

function Bar(name,label) {
    Foo.call( this, name );
    this.label = label;
}

// 'Bar.prototype'를 'Foo.prototype'에 연결한다.
Bar.prototype = Object.create( Foo.prototype );

// 여기서 조심! 이제 'Bar.prototype.constructor'은 사라졌으니
// 이 프로퍼티에 의존하는 코드가 있다면 수동으로 일일이 '해결'애야 한다.

Bar.prototype.myLabel = function() {
    return this.label;
};

var a = new Bar( "a", "obj a" );

a.myName();    // "a"
a.myLabel();   // "obj a"
