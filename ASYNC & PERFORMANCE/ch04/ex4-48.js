// 이렇게 하는 게 더 깔끔하다.
var fooThunkory = thunkify( foo );

var fooThunk1 = fooThunkory( 3, 4 );
var fooThunk2 = fooThunkory( 5, 6 );

// 다음 코드와 비교해보자.
var fooThunk1 = thunkify( foo, 3, 4);
var fooThunk2 = thunkify( foo, 5, 6);
