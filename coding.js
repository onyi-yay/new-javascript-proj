alert("Hello World");

// Rewriting all lost codes

//General loop algorithm
// Run begin
//→ (if condition → run body and run step)
//→ (if condition → run body and run step)
//→ (if condition → run body and run step)
//→ ...

//what is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert( i-- );
}
//Answer: 3,2,1
//Explanation: The loop runs until i = 0. The last value is 1, because after 0, the condition is false and the loop stops.

//Which values does the while loop show?
let j = 0;
while (++j < 5) alert( j );
//Answer: 1,2,3,4
//Explanation: The loop runs until j = 5. The alert shows the value of j after the increment, so the first value is 1.

let m = 0;
while (m++ < 5) alert( m );
//Answer: 1,2,3,4,5
//Explanation: The loop runs until m = 5. The alert shows the value of m before the increment, so the first value is 0.

//Which values does the for loop show?
for (let k = 0; k < 5; k++) alert( k );
//Answer: 0,1,2,3,4
//Explanation: The loop runs until k = 5. The alert shows the value of k before the increment, so the first value is 0.

//Which values get shown by the "for" loop?
for (let l = 0; l < 5; ++l) alert( l );
//Answer: 0,1,2,3,4
//Explanation: The loop runs until l = 5. The alert shows the value of l before the increment, so the first value is 0.
//The increment is done after the condition check, so the first value is 0.

//Output even numbers in the loop; Use the for loop to output even numbers from 2 to 10.
let n = 2;
for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) { // if the remainder of n divided by 2 is 0
    alert( n );
  }
}
//Answer: 2,4,6,8,10

//Rewrite the code changing the for loop to while without altering its behavior (output even numbers from 2 to 10).
let o = 2;
while (o <= 10) {
  if (o % 2 == 0) {
    alert( o );
  }
  o++;
}
//Answer: 2,4,6,8,10
//Explanation: The loop runs until o = 10. The alert shows the value of o before the increment, so the first value is 2.

//Repeat until the input is correct
//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
//Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
}
while (num <= 100 && num);
//Explanation: The loop continues to ask for a number until the visitor enters a number greater than 100 or cancels the input/enters an empty line.

//Output prime numbers
//Write the code which outputs prime numbers in the interval from 2 to n.
//For n = 10 the result will be 2,3,5,7.
//P.S. The code should work for any n, not be hard-tuned for any fixed value.

let r = 10;
let p = 10;
nextPrime:
for (let p = 2; p <= r; p++) {
  for (let q = 2; q < p; q++) {
    if (p % q == 0) continue nextPrime;
  }
  alert( p );
}
//Answer: 2,3,5,7

//Write the code using if..else which would correspond to the following switch
//switch (browser) {
    //case 'Edge':
      //alert( "You've got the Edge!" );
      //break;
  
    //case 'Chrome':
    //case 'Firefox':
    //case 'Safari':
    //case 'Opera':
      //alert( 'Okay we support these browsers too' );
      //break;
  
    //default:
      //alert( 'We hope that this page looks ok!' );
  //}

//Answer:
let internetBrowser = 'Chrome';
console.log(internetBrowser); //Check the value of the variable
if (internetBrowser == 'Edge') {
    console.log('Edge detected');
    alert( "You've got the Edge!" );
  }
    else if (internetBrowser == 'Chrome'
        || internetBrowser == 'Firefox'
        || internetBrowser == 'Safari'
        || internetBrowser == 'Opera') {
        console.log('Supported browsers detected');
        alert( 'Okay we support these browsers too' );
    }
    else {
        console.log('Other browsers detected');
        alert( 'We hope that this page looks ok!' );
    }

//Rewrite the code below using a single switch statement:
//let a = +prompt('a?', '');

//if (a == 0) {
  //alert( 0 );
//}
//if (a == 1) {
  //alert( 1 );
//}

//if (a == 2 || a == 3) {
  //alert( '2,3' );
//}

//Answer:
let b = +prompt('b?', '');
switch (b) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

