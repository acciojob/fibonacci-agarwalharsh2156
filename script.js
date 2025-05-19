function fibonacci(num) {
	var a = 0;
	var b = 1;
	if(num === 1){
		return a
	}
	if(num === 2){
		return b
	}
	for(i=2; i<num; i++){
		let temp = b
		b = a+b
		a= temp
	}
	return b
}

module.exports = fibonacci;
