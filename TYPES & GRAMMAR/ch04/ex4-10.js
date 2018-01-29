// 비 문자열 파싱

parseInt( 1/0, 19); //18



parseInt( new String( "42" ) );



var a = {
    num: 21,
    toString: function() { return String( this.num * 2 ); }
};

parseInt( a ); // 42



parseInt( 0.000008 ); // 0 ("0.000008" -> "0")
parseInt( 0.0000008 ); // 8 ("8e7" -> "8")
parseInt( false, 16 ); // 250 ("false" -> "fa")
parseInt( parseInt, 16 ); // 15 ("function..." -> "f")
parseInt( "0x10" ); // 16
parseInt( "103", 2 ); // 2
