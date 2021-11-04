function tournamentWinner(competitions, results) {
  // Write your code here.
	let obj = {};
	let winner;
  for(let i = 0; i < competitions.length; i++) {
		
		for(let j = 0; j < competitions[i].length - 1; j++) {
			
			if (results[i] === 0) {
				 if(obj[competitions[i][j + 1]] === undefined) {
					 obj[competitions[i][j + 1]] = 1;
				 }
				 else obj[competitions[i][j + 1]] += 1;
			}
			else {
				if(obj[competitions[i][j]] === undefined) {
					obj[competitions[i][j]] = 1;
				}
				else obj[competitions[i][j]] += 1;
			}
		}
	}
	winner = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
	return winner;
}