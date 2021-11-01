function twoNumberSum(array, targetSum) {
  // Write your code here.
	arr = [];
	
	for(let i = 0;i < array.length; i++) {
		for(let j = i + 1;j < array.length; j++) {
			if(array[i] + array[j] === targetSum) {
				arr.push(array[i], array[j]);
			}
		}
	}
	return arr;
}
