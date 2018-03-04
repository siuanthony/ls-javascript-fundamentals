//INSTRUCTION: 
// If you've finished the previous "Loopy Lighthouse" problem (and successfully submitted it) and would like more of a challenge, wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that, as you can see, you call with 3 parameters. range should be an array of 2 numbers representing the start and end values for the loop. multiples should be an array of 2 numbers representing the multiples you want to replace with words. words should be an array of 2 strings representing the words that will replace the multiples.


function loopyLighthouse(range, multiples, words){
	for (var i = Math.min.apply(null, range); i <= Math.max.apply(null, range); i++){
		if(i % multiples[0] === 0 && i % multiples[1] === 0){
			console.log(words[0] + words[1]);
		}else if(i % multiples[0] === 0){
			console.log(words[0]);
		}else if(i % multiples[1] === 0){
			console.log(words[1]);
		}else{
			console.log(i);
		}
	}
}
loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]);




// for(var i = 100; i <= 200; i++){
// 	if(i % 3 === 0 && i % 4 === 0){
// 		console.log("LoopyLighthouse");
// 	}else if(i % 3 === 0){
// 		console.log("Loopy");
// 	}else if(i % 4 === 0){
// 		console.log("Lighthouse");
// 	}else{
// 		console.log(i);
// 	}
// }
