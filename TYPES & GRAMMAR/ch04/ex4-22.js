// 4.5.3 희귀 사례

// 일 박힌 숫자 값

Number.prototype.valueOf = function() {
    return 3;
};
new Number( 2 ) == 3; // true



if (a == 2 && a == 3) {
    // ...
}



var i = 2;

Number.prototype.valueOf = function() {
    return i++;
};

var a = new Number( 42 );

if (a == 2 && a == 3) {
    console.log( "이런, 정말 되는구만!" );
}
