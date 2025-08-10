function memoization() {
	var cache = new Map();

	function calculation(a) {
		if (cache.has(a)) {
			console.log('cached', a);
			return cache.get(a)
		}

		var res = a * 10;
		cache.set(a, res);
		return res;
	}
	return calculation;
}

const ss = memoization();

console.log(ss(10));
console.log(ss(20));
console.log(ss(10));


