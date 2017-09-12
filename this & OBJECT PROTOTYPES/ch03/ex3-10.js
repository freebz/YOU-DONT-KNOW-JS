function foo() {
    console.log( "foo" );
}

var someFoo = foo; // 'foo'에 대한 변수 레퍼런스

var myObject = {
    someFoo: foo
};
foo; // function foo(){..}

someFoo; // function foo(){..}

myObject.someFoo; // function foo(){..}
