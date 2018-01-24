// 2.3.2 작은 소수 값

0.1 + 0.2 === 0.3; // false



if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2,-52);
}



function numbersCloseEnoughToEqual(n1,n2) {
    return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

numbersCloseEnoughToEqual( a, b ); // true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 ); // false
