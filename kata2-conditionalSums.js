var conditionalSum = function(values, condition) {
var answer = 0;

	if(condition === "even"){
		for(var i = 0; i < values.length; i++){
			if(values[i] % 2 === 0){
				answer += values[i];
			}
		}
	}else if(condition === "odd"){
		for(var j = 0; j < values.length; j++){
			if(values[j] % 2 !== 0){
				answer += values[j];
			}
		}
	}

	return answer;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0