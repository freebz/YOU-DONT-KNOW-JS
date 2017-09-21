function foo() {
    // 테스트할 작업(들)
}

var bench = new Benchmark(
    "foo test",         // 테스트 명
    foo,		// 테스트할 함수 (내용만)
    {
	                // ... // 추가 옵션 (문서 참조)
    }
);

bench.hz;               // 초당 작업 개수
bench.stats.moe;	// 한계 에러
bench.stats.variance;   // 분산
// ...
