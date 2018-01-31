// 5.2.3 결합성

var a = foo() && bar();



a ? b : c ? d : e;



a ? b : (c ? d : e)
(a ? b : c) ? d : e



true ? false : true ? true : true; // false

true ? false : (true ? true : true); // false
(true ? false : ture) ? true : true; // true



true ? false : true ? true : false; // false

true ? false : (true ? true : false); // false
(true ? false : true) ? true : false; // false



var a = true, b = false, c = true, d = true, e = false;

a ? b : (c ? d : e); // false, 'a'와 'b'만 평가한다.
(a ? b : c) ? d : e; // false, 'a', 'b', 'e'를 평가한다.



var a, b, c;
a = b = c = 42;



var a = 42;
var b = "foo";
var c = false;

var d = a && b || c ? c || b ? a : c && b : a;

d; // 42



((a && b) || c) ? ((c || b) ? a : (c && b)) : a



(
    (a && b)
	||
    c
)
    ?
(
    (c || b)
	?
    a
	:
    (c && b)
)
    :
a
