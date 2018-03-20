// //INSTRUCTIONS:
// //You'll be given two numbers, the total of a transaction, 
// and the amount of cash given to the cashier. Both of these numbers will be 
// represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Your function calculateChange should return an object which describes the 
// total amount of change for the cashier to give back. Omit any types of change 
// hat you shouldn't give back, i.e. if you don't give back a twenty dollar bill, 
// on't include it in the results.

// N.B. Although pennies are not used in circulation, still calculate the amount
// of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)


var calculateChange = function(total, cash) {
  var change = cash - total;
  var twentyDollar = 2000;
  var tenDollar = 1000;
  var fiveDollar = 500;
  var twoDollar = 200;
  var oneDollar = 100;
  var quarter = 25;
  var dime = 10;
  var nickle = 5;
  var penny = 1;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));