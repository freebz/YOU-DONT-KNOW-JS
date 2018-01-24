// 2.1.1 유사 배열

function foo() {
    var arr = Array.prototype.slice.call( arguments );
    arr.push( "bam" );
    console.log( arr );
}

foo( "bar", "baz" ); // ["bar","baz","bam"]



...
var arr = Array.from( arguments );
...
