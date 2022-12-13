let challenge = `30 Days of JavaScript`;
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2)); //substring
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split());

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("JavaScript"));

let string = "hello guys, what's up guys, sup guys";
let pattern = /guys/g;
console.log(string.match(pattern));

let var1 = "30 Days of";

console.log(var1.concat(" JavaScript"));
console.log(challenge.repeat(2));
