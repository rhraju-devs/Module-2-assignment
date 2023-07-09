
// Exercise 1
const destructureExample = (obj, arr) => {
  const { name, age } = obj;
  const [index0, , index2] = arr;
  return { name, age };
};

// Exercise 2
const sumNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

// Exercise 3
const createGreeting = (name) => {
  return `Hello, ${name}! Welcome to our website.`;
};

// Exercise 4
const isEven = (number) => {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

// Exercise 5
const multiply = (a, b) => a * b;

// Exercise 6
const getLargestNumber = (num1, num2) => num1 > num2 && num1 ?? num2;

// Exercise 7
const getAddressCity = (address) => {
  return address.city ?? 'Unknown';
};

// Exercise 8
const doubleNumbers = (numbers) => {
  return numbers.map((num) => num * 2);
};

// Exercise 9
const filterEvenNumbers = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};

// Exercise 10
const sumArray = (numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

// Exercise 11
const sortNumbers = (numbers) => {
  return numbers.sort((a, b) => a - b);
};
