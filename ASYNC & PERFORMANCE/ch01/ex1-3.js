function now() {
    return 21;
}

function later() {
    answer = answer * 2;
    console.log( "인생의 의미:", answer);
}

var answer = now();

setTimeout( later, 1000); // 인생의 의미: 42
