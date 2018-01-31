// 5.1.2 표현식의 부수 효과

var a = 2;
var b = a + 3;



function foo() {
    a = a + 1;
}

var a = 1;
foo(); // 결괏값: 'undefined', 부수 효과: 'a'가 변경됨.



var a = 42;
var b = a++;

a; // 43
b; // 42



var a = 42;

a++; // 42
a; // 43

++a; // 44
a; // 44



var a = 42;
var b = (a++);

a; // 43
b; // 42



var a = 42, b;
b = ( a++, a );

a; // 43
b; // 43



var obj = {
    a: 42
};

obj.a; // 42
delete obj.a; // true
obj.a; // undefined



var a;

a = 42; // 42
a; // 42



var a, b, c;

a = b = c = 42;



function vowels(str) {
    var matches;

    if (str) {
	// 모든 모음을 추출한다.
	matches = str.match( /[aeiou]/g );

	if (matches) {
	    return matches;
	}
    }
}

vowels( "Hello World" ); // ["e", "o", "o"]



function vowels(str) {
    var matches;

    // 모든 모음을 추출한다.
    if (str && (matches = str.match( /[aeiou]/g ))) {
	return matches;
    }
}

vowels( "Hello world" ); // ["e", "o", "o"]
