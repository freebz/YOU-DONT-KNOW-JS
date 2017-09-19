// 'request( )'는 프라미스-인식형 유틸리티다.

var res = [];

function *reqData(url) {
    res.push(
	yield request( url )
    );
}
