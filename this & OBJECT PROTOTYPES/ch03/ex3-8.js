var prefix = "foo";
var myObject = {
    [prefix + "baz"]: "hello",
    [prefix + "baz"]: "world"
};

myObject["foobar"]; // hello
myObject["foobaz"]; // world
