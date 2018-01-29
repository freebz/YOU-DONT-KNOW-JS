// 이상한 나라의 틸드(~)

0 | -0; // 0
0 | NaN; // 0
0 | Infinity; // 0
0 | -Infinity; // 0



~42; // -(42+1) ==> -43



var a = "Hello World";

if (a.indexOf( "lo" ) >= 0) { // true
    // found it!
}

if (a.indexOf( "lo" ) != -1) { // true
    // found it
}

if (a.indexOf( "ol" ) < 0) { // true
    // not found!
}

if (a.indexOf( "ol" ) == -1) { // true
    // not found!
}



var a = "Hello World";

~a.indexOf( "lo" ); // -4 <-- truthy!

if (~a.indexOf( "lo" )) { // true
    // 찾았다!
}


~a.indexOf( "ol" ); // 0 <-- falsy!
!~a.indexOf( "ol" ); // true

if (!~a.indexOf( "ol" )) { // true
    // 못 찾았다!
}
