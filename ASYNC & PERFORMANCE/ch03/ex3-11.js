if (
    p !== null &&
	(
	    typeof p === "object" ||
		typeof p === "function"
	) &&
	typeof p.then === "function"
) {
    // 데너블로 간주한다!
}
else {
    // 데너블이 아니다!
}
