function *bar() {
    console.log( "'*bar()' 내부:", yield "A" );

    // 제너레이터 아닌 객체에 'yield'-위임을 한다!
    console.log( "'*bar()' 내부:", yield *[ "B", "C", "D" ] );

    console.log( "'*bar()' 내부:", yield "E" );

    return "F";
}

var it = bar();

console.log( "외부:", it.next().value );
// 외부: A

console.log( "외부:", it.next( 1 ).value );
// '*bar()' 내부: 1
// 외부: B

console.log( "외부:", it.next( 2 ).value );
// 외부: C

console.log( "외부:", it.next( 3 ).value );
// 외부: D

console.log( "외부:", it.next( 4 ).value );
// '*bar()' 내부: undefined
// 외부: E

console.log( "외부:", it.next( 5 ).value );
// '*bar()' 내부: 5
// 외부: F
