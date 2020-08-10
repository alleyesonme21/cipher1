const sentence = prompt("Enter a sentence");

function firstAndLast(sentence) {
  return sentence.charAt(0) + sentence.charAt(sentence.length-1);
}
const result1 = firstAndLast(sentence).toUpperCase();

function reverse(result1) {
  return result1.charAt(1) + result1.charAt(0);
}
console.log(reverse(result1));

