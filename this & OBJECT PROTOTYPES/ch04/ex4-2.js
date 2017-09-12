// pseudo code

class Veicle {
    engines = 1

    ignition() {
	output( "엔진을 켠다." );
    }

    drive() {
	ignition();
	output( "방향을 맞추고 앞으로 간다!" )
    }
}

class Car inherits Vehicle {
    wheels = 4

    drive() {
	inherited:drive()
	output( wheels, "개의 바퀴로 굴러간다!" )
    }
}

class SpeedBoat inherits Vehicle {
    engines = 2

    ignition() {
	output( engines, "개의 엔진을 켠다." )
    }

    pilot() {
	inherited:drive()
	output( "물살을 가르며 쾌속으로 질주한다!" )
    }
}
