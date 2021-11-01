function isValidSubsequence(array, sequence) {
	let i = 0;
	let j = 0;
	
	while(i < array.length) {
		if(sequence[j] === array[i]) j++;
		i++;
	}
	if(j === sequence.length) return true;
	else return false;
}