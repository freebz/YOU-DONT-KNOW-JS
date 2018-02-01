// B.2.1 트레이서

{
    try {
	throw undefined;
    } catch (a) {
	a = 2;
	console.log( a );
    }
}

console.log( a );
