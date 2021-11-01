function sortedSquaredArray(array) {
	let arr = [];
	let a;
	for(let i = 0; i < array.length; i++) {
		arr[i] = array[i] * array[i];
	}
  	return arr.sort(function (a, b) {
  	return a - b;
	});
}
