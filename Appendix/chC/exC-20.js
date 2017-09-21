ASQ.react( function setup(next){
    var fstream = fs.createReadStream( "/some/file" );

    // 스트림의 "데이터" 이벤트를 'next( )'로 흘려보낸다.
    next.onStream( fstream );

    // 스트림의 끝을 리스닝한다.
    fstream.on( "end", function(){
	next.unStream( fstream );
    } );
} )
.seq( .. )
.then( .. )
.val( .. );
