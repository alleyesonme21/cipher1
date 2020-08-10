const sentence = prompt("Enter a sentence");

function reverseFirstAndLast(sentence) {
  const step1 = firstAndLast(sentence);
  const step2 = step1.toUpperCase();
  console.log(step2);
  const step3 = reverse(step2);
  console.log(step3);
  console.log(sentence + step3);
}

function firstAndLast(sentence) {
  return sentence.charAt(0) + sentence.charAt(sentence.length-1);
}

const result1 = firstAndLast(sentence).toUpperCase();

function reverse(result1) {
return result1.charAt(1) + result1.charAt(0);
}

reverseFirstAndLast(sentence);

// console.log(reverse(result1));

// function firstAndLast(sentence) {
//   return sentence.charAt(0) + sentence.charAt(sentence.length-1);
// }
// const result1 = firstAndLast(sentence).toUpperCase();

// function reverse(result1) {
//   return result1.charAt(1) + result1.charAt(0);
// }
// console.log(reverse(result1));

