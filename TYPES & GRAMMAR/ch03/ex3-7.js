// 3.4.3 Date() and Error()

if (!Date.now) {
    Date.now = function(){
	return (new Date()).getTime();
    };
}



function foo(x) {
    if (!x) {
	throw new Error( "x를 안 주셨어요!" );
    }
    // ...
}
