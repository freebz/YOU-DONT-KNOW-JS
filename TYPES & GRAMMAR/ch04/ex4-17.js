// 4.4.6 심벌의 강제변환

var s1 = Symbol( "좋아" );
String( s1 ); // "Symbol(좋아)"

var s2 = Symbol( "구려" );
s2 + ""; // TypeError
