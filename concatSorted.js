function merge(arrayOne, arrayTwo){
	for(var i = 0; i < arrayTwo.length; i++){
		arrayOne.push(arrayTwo[i]);
		arrayOne.sort();
	}
	return arrayOne;
}

console.log(merge([3,4,6],[1,2,9]));