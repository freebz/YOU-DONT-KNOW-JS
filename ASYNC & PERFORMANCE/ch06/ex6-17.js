function factorial(n) {
    function fact(n,res) {
	if (n < 2) return res;

	return fact( n - 1, n * res );
    }

    return fact( n, 1 );
}

factorial( 5 ); // 120
