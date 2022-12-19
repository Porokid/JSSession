// let sentence =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love.";

// let logThis = sentence.match(/love/gi);
// console.log(logThis);

// for (i = 0; i < logThis.length; i++);
// console.log(i);

// for (logers of logThis) {
//   console.log(logers);
// }

// let sentence2 =
//   "You cannot end a sentence with because because because is a conjunction";

// let becauseCounter = sentence2.match(/because/gi);
// console.log(becauseCounter);

// for (becauseNumber in becauseCounter) {
//   console.log(becauseNumber);
// }

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. "
  "The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& 
  "@emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting "
  "tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a "
  "tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt "
  "of &love& of tea&ching`;

let cleanSentence = `"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. "
"The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& 
"@emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting "
"tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a "
"tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt "
"of &love& of tea&ching"`;

let newString = cleanSentence.replace(/([^a-z0-9 ._-]+)/gi, "");

console.log(newString);

let string3 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let textWithNumber = string3.match(/\d+/g);
console.log(textWithNumber);
let makeItNumber = textWithNumber.map((changetoNum) => {
  return parseInt(changetoNum);
});
console.log(makeItNumber);

let annualIncome = makeItNumber.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(annualIncome);
// let earningsPerMonth = 5000;
// let annualBonus = 10000;
// let MonthlyOnlineCourses = 15000;

// annualIncome = earningsPerMonth * 12;
// annualIncomeTotal = annualIncome + annualBonus;

// annualOnlineCourses = MonthlyOnlineCourses * 12;
// totalIncome = annualOnlineCourses + annualIncomeTotal;

// console.log(totalIncome);

Math.round(7.0); // 7
Math.floor(7.0); // 7
Math.ceil(7.0); // 7
Math.trunc(7.0); // 7

Math.round(7.4); // 7
Math.floor(7.4); // 7
Math.ceil(7.4); // 8
Math.trunc(7.4); // 7

Math.round(7.5); // 8
Math.floor(7.5); // 7
Math.ceil(7.5); // 8
Math.trunc(7.5); // 7

Math.round(7.9); // 8
Math.floor(7.9); // 7
Math.ceil(7.9); // 8
Math.trunc(7.9); // 7
