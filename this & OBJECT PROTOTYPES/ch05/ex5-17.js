// 'o1'이 'o2'와 연관되는지('o2'에 위임되는지) 확인하는 헬퍼 유틸리티
function isRelatedTo(o1, o2) {
    function F(){}
    F.prototype = o2;
    return o1 instanceof F;
}

var a = {};
var b = Object.create( a );

isRelatedTo( b, a ); // true
