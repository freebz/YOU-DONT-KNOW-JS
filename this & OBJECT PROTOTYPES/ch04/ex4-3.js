// 아주 간단한 'mixin( )' 예제:
function mixin( sourceObj, targetObj ) {
    for (var key in sourceObj) {
	// 타깃에 없는 프로퍼티만 복사한다.
	if (!(key in targetObj)) {
	    targetObj[key] = sourceObj[key];
	}
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

var Car = mixin( Vehicle, {
    wheels: 4,

    drive: function() {
	Vehicle.drive.call( this );
	console.log(
	    this.wheels + "개의 바퀴로 굴러간다!"
	);
    }
} );
