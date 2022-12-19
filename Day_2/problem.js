let textWithNumber =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let NumbersInString = textWithNumber.match(/\d+/g);
console.log(NumbersInString);
let incomes = NumbersInString.map((numberInNumber) => {
  return parseInt(numberInNumber);
});
console.log(incomes);

let newIncomes = incomes.map(function (test, index) {
  return test * (index % 2 === 0 ? 12 : 1);
  // 1st 5000 * (0 % 2 === 0 ? 12 : 1) // 5000 * 12
  // 2nd 10000 * (1 % 2 === 0 ? 12 : 1) // 10000 * 1
  // 3rd 15000 * (2 % 2 === 0 ? 12 : 1) // 15000  * 12
});
console.log(newIncomes);

let annualIncome = newIncomes.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(annualIncome);

// CODEWARS PRAC

function solution(setOfNumbers) {
  let three = setOfNumbers.map((number) => {
    return number % 3 === 0 ? number : null;
  });
  let five = setOfNumbers.map((number) => {
    if (number >= 10) {
      return null;
    } else {
      return number % 5 === 0 ? number : null;
    }
  });
  let threeFive = [...three, ...five];

  const results = threeFive.filter((element) => {
    return element !== null;
  });
  console.log(results);
  let finalResult = results.reduce(function (a, b) {
    return a + b;
  });
  console.log(finalResult);
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
