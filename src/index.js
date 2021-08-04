module.exports = function reverse (n) {
	n = String(n);
	let index = n.length - 1;
	let reversedN = '';
	while (index >= 0) {
		if (n[index] == '-') {
            index = --index;
         }
		else {
			const currentChar = n[index];
			reversedN = `${reversedN}${currentChar}`;
			index = --index;
		}
	}
	return reversedN;
}
