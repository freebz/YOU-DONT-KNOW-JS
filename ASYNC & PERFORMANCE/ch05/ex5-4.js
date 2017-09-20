var w1 = new SharedWorker( "http://some.url.1/mycoolworker.js" );


w1.port.addEventListener( "message", handleMessages );

// ...

w1.port.postMessage( "something cool" );


w1.port.start();
