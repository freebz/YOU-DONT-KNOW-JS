// 5.1.1 문의 완료 값

var b;

if (true) {
    b = 4 + 38;
}



var a, b;

a = if (true) {
    b = 4 + 38;
};



var a, b;

a = eval( "if (true) { b = 4 + 38; }" );

a; // 42;



var a, b;

a = do {
    if (true) {
	b = 4 + 38;
    }
};

a; // 42
