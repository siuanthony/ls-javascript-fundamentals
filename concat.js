//INSTRUCTION: 
// Define a function concat, which, given two arrays, concatenates the arrays together.

function concat(arrayOne, arrayTwo){
	for(var i = 0; i < arrayTwo.length; i++){
		arrayOne.push(arrayTwo[i]);
	}
	return arrayOne;
}

console.log(concat([3,4,5],[6,7,8]));