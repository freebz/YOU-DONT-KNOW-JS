// 3.3 스코프 역할을 하는 함수

var a = 2;

function foo() {      // <- insert this
    var a = 3;
    console.log( a ); // 3
}                     // <- and this
foo();                // <- and this

console.log( a );     // 2



var a = 2;

(function foo(){      // <- insert this
    var a = 3;
    console.log( a ); // 3
})();                 // <- and this

console.log( a );     // 2
