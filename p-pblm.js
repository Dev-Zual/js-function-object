function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo();

// 2.
/* function make_avg(num1, num2, num3) {
  const total = num1 + num2 + num3;
  const average = total / 3;
  console.log(average);
}
make_avg(12, 34, 54); */

/* const numbers = [32, 38, 24, 87, 54, 77];
function make_avg(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  const average = sum / numArray.length;
  return average;
}

const result = make_avg(numbers);
console.log(result);
 */

/* function odd_even(number) {
  if (number % 2 == 0) {
    console.log("even : ", number);
  } else {
    console.log("odd :", number);
  }
}

odd_even(3);
 */

/* const signal = "yellow";
switch (signal) {
  case "yellow":
    console.log("ready to going");
    break;
  case "green":
    console.log("you can now go");
    break;
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("nothing");
    break;
}
 */
/* 
const numbers = [1, 34, 6, 7, 87];
console.log(numbers[numbers.length - 1]); */

/* function reverseString(sentence) {
  let reverseWord = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reverseWord += sentence[i];
  }
  return reverseWord;
}
const result = reverseString("hello");
console.log(result);
 */

/* const numbers = [1, 34, 100, 6, 7, 87];
function findBigNumber(numberArray) {
  const sorting = numberArray.sort((a, b) => {
    return b - a;
  });
  return sorting[0];
}
const bigNumber = findBigNumber(numbers);
console.log(bigNumber); */

// word count

const sentence = "hello world, i want      to become     programmer.";

function wordCount(sentenceCount) {
  /* sentenceCount.trim().split(/\s+/).length; 
  or
  */

  const count = sentenceCount.split(" ").filter(function (n) {
    return n != "";
  }).length;
  console.log(count);
}

wordCount(sentence);
