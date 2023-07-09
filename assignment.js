
// ========  Exercise 1  ========
function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [index0, , index2] = arr;
  return { name, age };
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const result = destructureExample(obj, arr);
console.log(result);


// ========  Exercise 2  ========
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const resultExercise2 = sumNumbers(1, 2, 3, 4, 5);
console.log(resultExercise2);


// ========  Exercise 3  ========
function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

const resultExercise3 = createGreeting('Alice');
console.log(resultExercise3);


// ========  Exercise 4  ========
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

const resultExercise4 = isEven(7);
console.log(resultExercise4);


// ========  Exercise 5  ========
const multiply = (a, b) => a * b;
const resultExercise5 = multiply(5, 3);
console.log(resultExercise5);



// ========  Exercise 6  ========
function getLargestNumber(a, b) {
  return a > b && a || b;
}

const resultExercise6 = getLargestNumber(10, 8);
console.log(resultExercise6);


// ========  Exercise 7  ========
function getAddressCity(address) {
  return address?.city ?? "Unknown";
}

const addressCity = { street: '123 Main St', country: 'USA', city: 'New York' };
const resultExercise7_1 = getAddressCity(addressCity);
console.log(resultExercise7_1);

const addressUnknown = { street: '123 Main St', country: 'USA'};
const resultExercise7_2 = getAddressCity(addressUnknown);
console.log(resultExercise7_2);



// ========  Exercise 8  ========
function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}

const resultExercise8 = doubleNumbers([1, 2, 3, 4, 5]);
console.log(resultExercise8);


// ========  Exercise 9  ========
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

const resultExercise9 = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(resultExercise9);


// ========  Exercise 10  ========
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

const resultExercise10 = sumArray([1, 2, 3, 4, 5]);
console.log(resultExercise10);


// ========  Exercise 11  ========
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const resultExercise11 = sortNumbers([5, 2, 8, 1, 4, 10]);
console.log(resultExercise11);
