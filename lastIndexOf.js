//INSTRUCTION: 
// Define a function lastIndexOf, which, given an array and a value, returns the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.


function lastIndexOf(array, last){
	var match = false;
	var index;

	for(var i = array.length - 1; i >= 0; i--){
		if(array[i] === last){
			match = true;
			index = i;
			break;
		}
	}

	if(match){
		return index;
	}else{
		return -1;
	}
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
