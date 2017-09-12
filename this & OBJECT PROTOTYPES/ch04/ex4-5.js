// "전통적인 자바스크립트 클래스" 'Vechicle'
function Vehicle() {
    this.engines = 1;
}
Vehicle.prototype.ignition = function() {
    console.log( "엔진을 켠다." );
};
Vehicle.prototype.drive = function() {
    this.ignition();
    console.log( "방향을 맞추고 앞으로 간다!" );
};

// "기생 클래스" 'Car'
function Car() {
    // 자동차는 탈것의 하나다.
    var car = new Vehicle();

    // 자동차에만 해당되는 내용은 수정한다.
    car.wheels = 4;

    // 'Vehicle::drive()'를 가리키는 내부 레퍼런스를 저장한다.
    var vehDrive = car.drive;

    // 'Vehdrive::drive()'를 오버라이드한다.
    car.drive = function() {
	vehDrive.call( this );
	console.log(
	    this.wheels + "개의 바퀴로 굴러간다!"
	);
    }
    return car;
}

var myCar = new Car();

myCar.drive();
// 엔진을 켠다.
// 방향을 맞추고 앞으로 간다!
// 4개의 바퀴로 굴러간다!
