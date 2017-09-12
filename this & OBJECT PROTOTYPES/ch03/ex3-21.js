"use strict";
var myObject = {};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // 쓰기 금지!
    configurable: true,
    enumerable: true
} );

myObject.a = 3; // TypeError
