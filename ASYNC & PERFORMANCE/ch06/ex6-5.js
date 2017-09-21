// 케이스 1
var x = ["민준","서연","지후","민서","현우"];
x.sort();

// 케이스 2
var x = ["민준","서연","지후","민서","현우"];
x.sorf( function mySort(a,b){
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
} );
