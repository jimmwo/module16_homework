export function multiply(a, b) {
    return a * b;
}

export function reverseAndNegate(arr) {
	if (!Array.isArray(arr)) {
		return [];
	}

	return arr.reverse().map(value => -value);
}