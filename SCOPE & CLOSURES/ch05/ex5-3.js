// 클로저

function setupBot(name,selector) {
    $( selector ).click( function activator(){
	console.log( "Activating: " + name );
    } );
}

setupBot( "Closure Bot 1", "#bot_1" );
setupBot( "Closure Bot 2", "#bot_2" );



var a = 2;

(function IIFE(){
    console.log( a );
})();
