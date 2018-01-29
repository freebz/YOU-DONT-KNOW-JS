// 4.4.4 암시적 강제변환: * -> 불리언

var a = 42;
var b = "abc";
var c;
var d = null;

if (a) {
    console.log( "넵" ); // 넵
}

while (c) {
    console.log( "절대 실행될 리 없지!" );
}

c = d ? a : b;
c; // "abc"

if ((a && d) || c) {
    console.log( "넵" ); // 넵
}
