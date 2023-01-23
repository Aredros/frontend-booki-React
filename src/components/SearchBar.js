JS Method:
Some() 

It checks if some elements exists in an array, and returns true or false.
Similar to includes() method, except the argument is a function and not a String.

const age = [16, 14, 18]
age.some((person) => person => 18) // true

--------------------------------------------

JS Method:
Filter() 

It filters an array based on a condition, and returns a new array with the filtered elements.

const prices = [10, 20, 30, 40, 50];
const filteredPrices = prices.filter((price) => price > 20); // [30, 40, 50]

--------------------------------------------

JS Method:
Map()

It maps an array to a new array, and returns the new array.

const prices = [10, 20, 30, 40, 50];
const newPrices = prices.map((price) => price + 10); // [20, 30, 40, 50, 60]

--------------------------------------------

JS Method:
Spread()

three dots (...) before an array.
It spreads an array into a list of elements.

const prices = [10, 20, 30, 40, 50];
const newPrices = [...prices, 60, 70, 80]; // [10, 20, 30, 40, 50, 60, 70, 80]

--------------------------------------------

JS Method:
Reduce()

It reduces an array to a single value.

const prices = [10, 20, 30, 40, 50];
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0); // 150

--------------------------------------------

JS Method:
Find()

It finds an element in an array based on a condition, and returns the first element that matches the condition.

const prices = [10, 20, 30, 40, 50];
const foundPrice = prices.find((price) => price > 30); // 40

--------------------------------------------

JS Method:
FindIndex()

It finds an element in an array based on a condition, and returns the index of the first element that matches the condition.

const prices = [10, 20, 30, 40, 50];
const foundPriceIndex = prices.findIndex((price) => price > 30); // 3

--------------------------------------------

JS Method:
Sort()

It sorts an array based on a condition, and returns the sorted array.

const prices = [50, 10, 20, 40, 30];
const sortedPrices = prices.sort((a, b) => a - b); // [10, 20, 30, 40, 50]

--------------------------------------------

JS Method:
Reverse()

It reverses an array, and returns the reversed array.

const prices = [10, 20, 30, 40, 50];
const reversedPrices = prices.reverse(); // [50, 40, 30, 20, 10]

--------------------------------------------

JS Method:
Slice()

It slices an array based on a condition, and returns the sliced array.

const prices = [10, 20, 30, 40, 50];
const slicedPrices = prices.slice(1, 3); // [20, 30]

--------------------------------------------

JS Method:
Concat()

It concatenates two arrays, and returns the concatenated array.

const prices = [10, 20, 30, 40, 50];
const newPrices = prices.concat([60, 70, 80]); // [10, 20, 30, 40, 50, 60, 70, 80]

--------------------------------------------

JS Method:
Join()

It joins an array into a string, and returns the string.

const prices = [10, prince, 30, adri, 20];
const joinedPrices = prices.join(', '); // "10, prince, 30, adri, 20"

--------------------------------------------

JS Method:
Split()

It splits a string into an array, and returns the array.

const prices = "10, prince, 30, adri, 20";
const splitPrices = prices.split(', '); // ["10", "prince", "30", "adri", "20"]

--------------------------------------------

JS Method:
Push()

It adds an element to the end of an array, and returns the new LENGTH of the array.

const numbers = [one, two, three];
const newLength = numbers.push(four); // 4 

--------------------------------------------

JS Method:
Pop()

It removes an element from the end of an array, and returns the removed element.

const numbers = [one, two, three, four];
const removedElement = numbers.pop(); // four

--------------------------------------------

JS Method:
Shift()

It removes an element from the beginning of an array, and returns the removed element.

const numbers = [one, two, three, four];
const removedElement = numbers.shift(); // one

--------------------------------------------

JS Method:
Unshift()

It adds an element to the beginning of an array, and returns the new LENGTH of the array.

const numbers = [one, two, three, four];
const newLength = numbers.unshift(zero); // 5

--------------------------------------------

JS Method:
Includes()

It checks if an array includes an element, and returns true or false.

const numbers = [one, two, three, four];
const isIncluded = numbers.includes(two); // true

--------------------------------------------

JS Method:
IndexOf()

It returns the index of an element in an array.

const numbers = [one, two, three, four];
const index = numbers.indexOf(two); // 1

--------------------------------------------

JS Method:
LastIndexOf()

It returns the last index of an element in an array.

const numbers = [one, two, three, four, two];
const index = numbers.lastIndexOf(two); // 4

--------------------------------------------

JS Method:
Every()

It checks if every element in an array matches a condition, and returns true or false.

const numbers = ["hello", "world", "hello", "world"];
const areEveryWords = numbers.every((word) => word === "hello"); // false
--------------------------------------------

JS Method:
Some()

It checks if some elements in an array match a condition, and returns true or false.

const numbers = ["hello", "world", "hello", "world"];
const areSomeWords = numbers.some((word) => word === "hello"); // true

--------------------------------------------

JS Method:
Filter()

It filters an array based on a condition, and returns a new array with the filtered elements.

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => number > 3); // [4, 5]

--------------------------------------------

What will this return ?

const age = [16, 14, 18];

age.every((person) => person => 18) // true

--------------------------------------------

What will this return ?

const garage = ["car", "bike", "car", "car"];
const findcar = garage.includes("car"); 
console.log(findcar); // true

--------------------------------------------

What will this return ?

const toolBox = ["hammer", "screwdriver", "wrench"];

for(const item of toolBox) {
  console.log(item);
}

// hammer
// screwdriver
// wrench

--------------------------------------------

What will this return ?

const prices = [10, 20, 30, 40, 50];
const superPrice = prices.filter((price) => price > 30); 
console.log(superPrice); // [40, 50]

--------------------------------------------

What will this return ?

const age = [16, 14, 18];

age.some((person) => person => 18) // true

--------------------------------------------

//What will this return ?

const favoriteFoods = ["pizza", "burger", "hotdog", "sushi"];
console.log(...favoriteFoods); // pizza burger hotdog sushi

--------------------------------------------

const age = [16, 14, 18];

age.every((person => person >= 12) // true

--------------------------------------------

