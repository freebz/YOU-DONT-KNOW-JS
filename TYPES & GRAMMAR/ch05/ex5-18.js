// 5.7 switch

switch (a) {
case 2:
    // 뭔가 할테고
    break;
case 42:
    // 다른 일을 할테고
    break;
default:
    // 아무것도 안 걸리면 여기로!
}



var a = "42";

switch (true) {

case a == 10:
    console.log( "10 또는 '10'" );
    break;
case a == 42:
    console.log( "42 또는 '42'" );
    break;
default:
    // 여기 올 일은 없지!
}
// 42 또는 '42'



var a = "Hello world";
var b = 10;

switch (true) {
case (a || b == 10):
    // 여기 올 일은 없지!
    break;
default:
    console.log( "어이쿠" );
}
// 어이쿠



var a = 10;

switch (a) {
case 1:
case 2:
    // never gets here
default:
    console.log( "default" );
case 3:
    console.log( "3" );
    break;
case 4:
    console.log( "4" );
}
// default
// 3
