// 단축 메서드 구문과 더불어 개선된 객체 리터럴을 사용하자!
var AuthController = {
    errors: [],
    checkAuth() {
	// ...
    },
    server(usr,data) {
	// ...
    }
    // ...
};

// 이제 'AuthController'를 'LoginController'에 위임한다.
Object.setPrototypeOf( AuthController, LoginController );
