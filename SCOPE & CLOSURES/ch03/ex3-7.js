// 3.3.2 함수 표현식 즉시 호출하기

var a = 2;

(function foo(){
    var a = 3;
    console.log( a ); // 3
})();

console.log( a ); // 2



var a = 2;

(function IIFE(){
    var a = 3;
    console.log( a ); // 3
})();

console.log( a ); // 2



var a = 2;

(function IIFE( global ){
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
})( window );

console.log( a ); // 2



undefined = true; // setting a land-mine for other code! avoid!

(function IIFE(undefined){
    var a;
    if (a === undefined) {
	console.log("Undefined is safe here!");
    }
})();



var a = 2;

(function IIFE( def ){
    def( window );
})(function def( global ){
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
});
