// 부록 B.2 폴리필링 블록 스코프

{
    let a = 2;
    console.log( a ); // 2
}

console.log( a ); // ReferenceError



try{throw 2}catch(a){
    console.log( a ); // 2
}

console.log( a ); // ReferenceError
