//brute force
function twoNumberSum(array, targetSum) {
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


//refactored approach
function twoNumberSum(array, targetSum) {
	let arr = [];
	let obj = {};
	let value;
	
	for(let i = 0; i < array.length; i++) {
		value = targetSum - array[i];
		if(obj[value] === true) {
			arr.push(value, array[i]);
			break;
		}
		else {
			obj[array[i]] = true;
		}
	}
	return arr;
}
