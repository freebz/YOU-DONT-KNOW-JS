var observable = listener.on( "foobar" );

// 나중에
observable
.then( .. )
.then( .. );

// 어딘가에서
observable
.then( .. )
.then( .. );
