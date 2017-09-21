function factorial(n) {
    if (n < 2) return 1;

    var res = 1;
    for (var i=n; i>1; i--) {
	res *= i;
    }
    return res;
}

factorial( 5 ); // 120
