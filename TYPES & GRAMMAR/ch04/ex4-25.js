// 근본부터 따져보자

"0" == false; // true -- 어이쿠!
false == 0; // true -- 어이쿠!
false == ""; // true -- 어이쿠!
false == []; // true -- 어이쿠!
"" == 0; // true -- 어이쿠!
"" == []; // true -- 어이쿠!
0 == []; // true -- 어이쿠!



"" == 0; // true -- 어이쿠!
"" == []; // true -- 어이쿠!
0 == []; // true -- 어이쿠!



function doSomething(a) {
    if (a == "") {
	// ...
    }
}



function doSomething(a,b) {
    if (a == b) {
	// ...
    }
}
