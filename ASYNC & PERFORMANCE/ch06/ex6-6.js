// 케이스 1
var x = [12,-14,0,3,18,0,2.9];
x.sort();

// 케이스 2
var x = [12,-14,0,3,18,0,2.9];
x.sort( function mySort(a,b){
    return a - b;
} );
