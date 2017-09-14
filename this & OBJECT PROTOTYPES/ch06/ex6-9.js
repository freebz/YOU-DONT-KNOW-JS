// 부모 클래스
function Widget(width,height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
}

Widget.prototype.render = function($where){
    if (this.$elem) {
	this.$elem.css( {
	    width: this.width + "px",
	    height: this.height + "px"
	} ).appendTo( $where );
    }
};

// 자식 클래스
function Button(width,height,label) {
    // "super" 생성자 호출
    Widget.call( this, width, height );
    this.label = label || "Default";

    this.$elem = $( "<button>" ).text( this.label );
}

// 'Button'은 'Widget'으로부터 상속받는다.
Button.prototype = Object.create( Widget.prototype );

// "상속받은" 'render( )'를 오버라이드 한다.
Button.prototype.render = function($where) {
    // "super" 호출
    Widget.prototype.render.call( this, $where );
    this.$elem.click( this.onClick.bind( this ) );
};

Button.prototype.onClick = function(evt) {
    console.log( this.label + " 버튼이 클릭됨!" );
};

$( document ).ready( function(){
    var $body = $( document.body );
    var btn1 = new Button( 125, 30, "Hello" );
    var btn2 = new Button( 150, 40, "World" );

    btn1.render( $body );
    btn2.render( $body );
} );
