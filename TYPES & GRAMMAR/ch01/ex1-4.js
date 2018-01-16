// 1.3.2 선언되지 않은 변수

// 헉, 이렇게 하면 에러가 난다!
if (DEBUG) {
    console.log( "디버깅을 시작합니다" );
}

// 이렇게 해야 안전하게 존재 여부를 체크할 수 있다.
if (typeof DEBUG !== "undefined") {
    console.log( "디버깅을 시작합니다" );
}



if (typeof atob === "undefined") {
    atob = function() { /* ... */ };
}



if (window.DEBUG) {
    // ...
}

if (!window.atob) {
    // ...
}



function doSomethingCool() {
    var helper =
	(typeof FeatureXYZ !== "undefined") ?
	FeatureXYZ :
	function() { /*... 기본 XYZ 기능 ...*/ };

    var val = helper();
    // ...
}



// IIFE (즉시 호출 함수 표현식, 2부 스코프와 클로저 참조)
(function(){
    function FeatureXYZ() { /*... 나의 XYZ 기능 ...*/ }

    // 'doSomethingCool()'를 포함
    function doSomethingCool() {
	var helper =
	    (typeof FeatureXYZ !== "undefined") ?
	    FeatureXYZ :
	    function() { /*... 기본 XYZ 기능 ...*/ };

	var val = helper();
	// ...
    }

    doSomethingCool();
})();



function doSomethingCool(FeatureXYZ) {
    var helper = FeatureXYZ ||
	function() { /*... 기본 XYZ 기능 ...*/ };

    var val = helper();
    // ...
}
