var sq = ASQ.react( function setup(next,registerTeardown){
    var btn = document.getElementById( "mybtn" );

    // 'sq.stop()'을 호출하면 실행된다.
    registerTeardown( function(){
	btn.removeEventListener( "click", next, false );
    } );
} )
.seq( .. )
.then( .. )
.val( .. );

// 나중에
sq.stop();
