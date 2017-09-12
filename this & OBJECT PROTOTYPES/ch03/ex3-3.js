var strPrimitive = "나는 문자열이야!";
typeof strPrimitive;		// "string"
strPrimitive instanceof String;	// false

var strObject = new String( "나는 문자열이야!" );
typeof strObject;		// "object"
strObject instanceof String;	// true

// 객체 하위 타입을 확인한다.
Object.prototype.toString.call( strObject ); // [object String]
