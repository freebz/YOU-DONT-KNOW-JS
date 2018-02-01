// 부록 A.7 구현 한계

function addAll() {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
	sum += arguments[i];
    }
    return sum;
}

var nums = [];
for (var i=1; i < 100000; i++) {
    nums.push(i);
}

addAll( 2, 4, 6 ); // 12
addAll.apply( null, nums ); // 4999950000이 되어야 한다.
