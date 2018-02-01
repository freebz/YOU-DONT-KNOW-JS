// 5.5.2 미래의 모듈

// bar.js
function hello(who) {
    return "Let me introduce: " + who;
}

export hello;

// foo.js: import only `hello()` from the "bar" module
import hello from "bar";
var hungry = "hippo";
function awesome() {
    console.log(
	hello( hungry ).toUpperCase()
    );
}

export awesome;

// baz.js: import the entrie "foo" and "bar' modules
module foo from "foo";
module bar from "bar";

console.log(
    bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO