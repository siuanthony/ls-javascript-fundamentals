//INSTRUCTION: 
// We've been working with a pop idol on a new song, and to make sure it's a bonafide ear worm, the label wants us to repeat the chorus ten times at the end of the song. Wanting to practice some JavaScript, we decide to write a while loop to print out the chorus ten times.

var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");