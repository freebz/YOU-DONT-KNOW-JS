function success(data) {
    console.log( data );
}

function failure(err) {
    console.log( err );
}

ajax( "http://some.url.1", success, failure );
