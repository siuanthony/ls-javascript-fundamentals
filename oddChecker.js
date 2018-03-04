//INSTRUCTION: 
// Create a new file in your lighthouse-js-fundamentals git repo directory in Vagrant called odd.js, and inside it define a function called isOdd. This function should take a number as a parameter and return true if it is odd and false otherwise.

function oddChecker(num){
	return num % 2 !== 0
}

console.log(oddChecker(7));
console.log(oddChecker(10));