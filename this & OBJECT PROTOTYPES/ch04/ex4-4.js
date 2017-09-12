// mixin의 대안으로, 덮어쓸 가능성이 상대적으로 크다.
function mixin( sourceObj, targetObj ) {
    for (var key in sourceObj) {
	    targetObj[key] = sourceObj[key];
    }
    return targetObj;
}

var Vehicle = {
    engines: 1,

    ignition: function() {
	console.log( "엔진을 켠다." );
    },

    drive: function() {
	this.ignition();
	console.log( "방향을 맞추고 앞으로 간다!" );
    }
};

// 먼저 Vehicle의 내용을 집어넣을 빈 객체를 생성한다.
var Car = mixin( Vehicle, { } );

// 이제 원하는 내용을 Car에 복사한다.
mixin( {
    wheels: 4,

    drive: function() {
	Vehicle.drive.call( this );
	console.log(
	    this.wheels + "개의 바퀴로 굴러간다!"
	);
    }
}, Car );
