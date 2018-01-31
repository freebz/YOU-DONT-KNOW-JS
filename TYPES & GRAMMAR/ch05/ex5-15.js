// 5.4.1 너무 이른 변수 사용

{
    a = 2; // ReferenceError!
    let a;
}



{
    typeof a; // undefined
    typeof b; // ReferenceError! (TDZ)
    let b;
}
