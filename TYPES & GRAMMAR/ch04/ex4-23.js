// Falsy 비교

"0" == null; // false
"0" == undefined; // false
"0" == false; // true -- 어이쿠!
"0" == NaN; // false
"0" == 0; // true
"0" == ""; // false


false == null; // false
false == undefined; // false
false == NaN; // false
false == 0; // true -- 어이쿠!
false == ""; // true -- 어이쿠!
false == []; // true -- 어이쿠!
false == {}; // false


"" == null; // false
"" == undefined; // false
"" == NaN; // false
"" == 0; // true
"" == []; // true -- 어이쿠!
"" == {}; // false


0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true -- 어이쿠!
0 == {}; // false
