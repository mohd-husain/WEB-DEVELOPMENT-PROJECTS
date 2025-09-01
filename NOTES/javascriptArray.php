1. Array is a group of continuous memory locations.
It is used to store multiple values into a single variable.
An array is a special variable, which can hold more than one value:
const cars = ["a", "b", "c"];

Array is a mutable Datatype

2. // Initializing while declaring 
var house = ["1BHK", "2BHK", "3BHK"]; 


3. // Initializing after declaring
house[0] = "1BHK";
house[1] = "2BHK"; 
house[2] = "3BHK"; 
house[3] = "4BHK";


4. const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();


5. Arrays use numbers to access its "elements". In this example, person[0] returns John:
Array: const person = ["John", "Doe", 46];


6. const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;


7. Accessing the Last Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];


8. Looping Array Elements
One way to loop through an array, is using a for loop:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


9. Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


10. const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits



11. const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"



12. const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined




13. How to Recognize an Array
A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;

Solution 1 : Array.isArray(fruits);
Solution 2 : fruits instanceof Array;


JavaScript Array Methods

- Array length
fruits.length;

- Array toString()
fruits.toString();

- Array join() - It replace the ',' with specific given symbol.
var fruits = fruits.join(" * ");

Array pop() - The pop() method removes the last element from an array.

Array push() - The push() method appends a new element to an array:
fruits.push("Kiwi");

Array shift() - The shift() method removes the first element of an array (and "shifts" the other elements to the left):

Array unshift() - The unshift() method adds new elements to the beginning of an array:

Array delete() - Array elements can be deleted using the JavaScript operator delete.
delete fruits[0];

Array concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const myarr = arr1.concat(arr2);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);


Array splice()
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(2, 0, "Lemon", "Kiwi");
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.

Example 1: Removing Elements
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove one element starting from index 1
fruits.splice(1, 1);

console.log(fruits);  // Output: ['apple', 'cherry', 'date']

Example 2: Removing and Adding Elements
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove two elements starting from index 1 and add 'grape' and 'kiwi'
fruits.splice(1, 2, 'grape', 'kiwi');

console.log(fruits);  // Output: ['apple', 'grape', 'kiwi', 'date']


Example 3: Adding Elements without Removing

let fruits = ['apple', 'banana', 'cherry', 'date'];

// Add 'grape' and 'kiwi' starting from index 2 without removing any elements
fruits.splice(2, 0, 'grape', 'kiwi');

console.log(fruits);  // Output: ['apple', 'banana', 'grape', 'kiwi', 'cherry', 'date']



Array slice()
fruits.slice(2);
fruits.slice(2,4);

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract elements from index 1 to (but not including) index 4
let slicedArray = fruits.slice(1, 4);

console.log(slicedArray);  // Output: ['banana', 'cherry', 'date']
console.log(fruits);       // Original array is unchanged: ['apple', 'banana', 'cherry', 'date', 'elderberry']



let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract elements from index 2 to the end of the array
let slicedArray = fruits.slice(2);

console.log(slicedArray);  // Output: ['cherry', 'date', 'elderberry']



let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract elements from the second-to-last element to the end of the array
let slicedArray = fruits.slice(-2);

console.log(slicedArray);  // Output: ['date', 'elderberry']





9. You can also use the Array.forEach() function:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}