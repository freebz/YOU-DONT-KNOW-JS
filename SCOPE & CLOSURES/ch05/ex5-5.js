// 5.4.1 다시 보는 블록 스코프

for (var i=1; i<=5; i++) {
    let j = i; // yay, block-scope for closure!
    setTimeout( function timer(){
	console.log( j );
    }, j*1000 );
}



for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
	console.log( i );
    }, i*1000 );
}
