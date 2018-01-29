// 4.3.2 명시적 강제변환: 숫자 형태의 문자열 파싱

var a = "42";
var b = "42px";

Number( a ); // 42
parseInt( a ); // 42

Number( b ); // NaN
parseInt( b ); // 42



var hour = parseInt( selectedHour.value );
var minute = parseInt( selectedMinute.value );

console.log("The time you selected was: " + hour + ":" + minute);



var hour = parseInt( selectedHour.value, 10 );
var minute = parseInt( selectedMinute.value, 10 );
