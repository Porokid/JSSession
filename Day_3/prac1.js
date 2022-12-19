let firstName = typeof "Ron";
let lastName = typeof "Coching";
let country = typeof "Philippines";
let city = typeof "Imus";
let age = typeof 21;
let isMarried = typeof false;

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);

///////////////////////

console.log(typeof 10 === "10");

//////////////////////
console.log(parseInt("9.8") === 10);
//////////////////////

/* Truthy Values:
negative and positive numbers
not an empty string
Boolean True

   Falsy:
and empty string
equals to 0
undefined */

let test = new Date();
console.log(test.getFullYear());
console.log(test.getMonth() + 1);
console.log(test.getDate());
console.log(test.getDay());
console.log(test.getHours());
console.log(test.getMinutes());
console.log(test.getTime());
