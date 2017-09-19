function *foo() {
    console.log( "'*foo()' 내부:", yield "B" );
    
    console.log( "'*foo()' 내부:", yield "C" );

    return "D";
}

function *bar() {
    console.log( "'*bar()' 내부:", yield "A" );

    // 'yield'-위임!
    console.log( "'*bar()' 내부:", yield *foo() );

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
// '*foo()' 내부: 2
// 외부: C

console.log( "외부:", it.next( 3 ).value );
// '*foo()' 내부: 3
// '*bar()' 내부: D
// 외부: E

console.log( "외부:", it.next( 4 ).value );
// '*bar()' 내부: 4
// 외부: F
