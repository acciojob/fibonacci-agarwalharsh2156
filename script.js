function fibonacci(num) {
	var a = 0;
	var b = 1;
	for(i=2; i<num; i++){
		let temp = b
		b = a+b
		a= temp
	}
	return b
}

module.exports = fibonacci;
