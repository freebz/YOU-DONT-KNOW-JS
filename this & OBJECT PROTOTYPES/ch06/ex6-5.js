function Foo() {}
var a1 = new Foo();

Foo.prototype.constructor = function Gotcha(){};

a1.constructor;		// Gotcha(){}
a1.constructor.name;    // "Gotcha"

a1; // Foo {}
