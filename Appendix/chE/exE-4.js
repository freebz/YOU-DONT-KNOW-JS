// B.2.2 암시적 블록 vs 명시적 블록

let (a = 2) {
    console.log( a ); // 2
}

console.log( a ); // ReferenceError



/*let*/ { let a = 2;
  console.log( a );
}

console.log( a ); // ReferenceError



{
    let a = 2;
    console.log( a );
}

console.log( a ); // ReferenceError
