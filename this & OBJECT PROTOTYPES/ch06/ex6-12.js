// 부모 클래스
function Controller() {
    this.errors = [];
}
Controller.prototype.showDialog = function(title,msg) {
    // 사용자에게 다이얼로그 창으로 타이틀과 메시지를 표시한다.
};
Controller.prototype.success = function(msg) {
    this.showDialog( "Success", msg );
};
Controller.prototype.failure = function(err) {
    this.errors.push( err );
    this.showDialog( "Error", err );
};
// 자식 클래스
function LoginController() {
    Controller.call( this );
}
// 자식 클래스를 부모 클래스에 연결한다.
LoginController.prototype =
    Object.create( Controller.prototype );
LoginController.prototype.getUser = function() {
    return document.getElementById( "login_username" ).value;
};
LoginController.prototype.getPassword = function() {
    return document.getElementById( "login_password" ).value;
};
LoginController.prototype.validateEntry = function(user,pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
	return this.failure(
	    "ID와 비밀번호를 입력하여 주십시오!"
	);
    }
    else if (user.length < 5) {
	return this.failure(
	    "비밀번호는 5자 이상이어야 합니다!"
	);
    }

    // 여기까지 왔다면 검증 통과!
};

// 기본 'failure()'를 확장하기 위해 오버라이드한다.
LoginController.prototype.failure = function(err) {
    // "super"를 호출한다.
    Controller.prototype.failure.call(
	this,
	"로그인 실패: " + err
    );
};

// 자식 클래스
function AuthController(login) {
    Controller.call( this );
    // 상속 + 구성
    this.login = login
}
// 자식 클래스를 부모 래스에 연결한다.
AuthController.prototype =
    Object.create( Controller.prototype );
AuthController.prototype.server = function(url,data) {
    return $.ajax( {
	url: url,
	data: data
    } );
};
AuthController.prototype.checkAuth = function() {
    var user = this.login.getUser();
    var pw = this.login.getPassword();

    if (this.login.validateEntry( user, pw )) {
	this.server( "/check-auth", {
	    user: user,
	    pw: pw
	} )
	    .then( this.success.bind( this ) )
	    .fail( this.failure.bind( this ) );
    }
};
// 기본 'success()'를 확장하기 위해 오버라이드한다.
AuthController.prototype.success = function() {
    // "super"를 호출한다.
    Controller.prototype.success.call( this, "인증 성공!" );
};
// 'failure()'를 ' 확기 위해 오버라이드한다.
AuthController.prototype.failure = function(err) {
    // "super"를 호출한다.
    Controller.prototype.failure.call(
	this,
	"인증 실패: " + err
    );
};
var auth = new AuthController(
    // 상속 + 구성
    new LoginController()
);
auth.checkAuth();
