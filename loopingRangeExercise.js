//INSTRUCTION: 
// Define a function range which takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.


// First run 
// function range(start, end, step){
// 	for(var i = start; i <= end; i+=step){
// 		if(step < 0){
// 			return "";
// 		}else{
// 			console.log(i);
// 		}
// 	}
// }
≈

function range(start, end, step){
	var array = [];

	if(step < 0){
		return [];
	}else{
		for(var i = start; i <= end; i+=step){
			array.push(i);
		}
		return array;
		}
	}
 

console.log(range(0, 10, -2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, -3));