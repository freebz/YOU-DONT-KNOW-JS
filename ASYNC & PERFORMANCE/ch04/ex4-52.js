// 프라미서리 'request()' (2부 3장 프라미스 참고)
var request = Promise.wrap( ajax );

// vs.

// 썽커리 'request( )'
var request = thunkify( ajax );
