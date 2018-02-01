var greeting = "Hello world";

var el = document.createElement( "script" );

el.text = "function foo(){ alert( greeting );\
  } setTimeout( foo, 1000 );";
document.body.appendChild( el );
