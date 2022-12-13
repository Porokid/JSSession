console.log(
  "The quote \
'There is no exercise better for the heart than reaching down and lifting people up.'\
by John Holmes teaches us to help one another."
);

console.log(" ");

console.log(`Love is not patronizing and charity isn't about pity, it is about love. 
Charity and love are the same -- with charity you give love, so don't just give money 
but reach out your hand instead.`);

console.log(" ");

let num1 = 10;
let num2 = "10";

console.log(num1 === num2);

console.log(num1 === +num2);
console.log(num1 === parseInt(num2));

console.log(Math.ceil(parseFloat(9.8)) === 10);

let python = "python";
let jargon = "jargon";
console.log(python.includes("on"));
console.log(jargon.includes("on"));

console.log(" ");

let RandomNumber = Math.floor(Math.random() * 100);
console.log(RandomNumber);

let RandomNumber2 = Math.floor(50 + Math.random() * 50);
console.log(RandomNumber2);

let RandomNumber3 = Math.floor(Math.random() * 255);
console.log(RandomNumber3);

console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

let word =
  "You cannot end a sentence with because because because is a conjunction";

console.log(word.substr(31, 24));

let string = "JavaScript";
console.log(string.substr(4, 6)); // Script
