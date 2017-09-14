function result(data) {
    console.log( a );
}

var a = 0;

ajax( "..미리 캐시된 URL..", asyncify( result ) );
a++;
