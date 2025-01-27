/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.

let text = "";
/*
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
// for loop then printing to console .log, incresing the count once as it was at 0
for (let increment = 0; increment < students.length; increment++) {
  text += students[increment] + "<br>";
}
console.log(students)

*/






/*
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];




// for loop then printing to console .log, incresing the count once as it was at 0
for (let increment = 0; increment < grades.length; increment++) {
  text += grades[increment] + "<br>";
}
console.log(grades.reverse())

//.reverse() - reverse the array
// console.log(myArray.reverse());
*/






/*
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

 

for (let i = 0; i < positiveNumbers.length; i++) {
 let num = positiveNumbers[i];
  if (num % 2 === 0 ){
  console.log(num);
}
}
*/



// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
  let num = mixedSignNumbers[i];
   if (num % 2 === 0 ){
   console.log(num);
 }
 }
 



// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.


// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];


console.log(str.toLowerCase)








Array methods

let myArray = ["Dog", "Cat", "Deer", "Bear", "Fish"];

//.reverse() - reverse the array
// console.log(myArray.reverse());
// myArray.reverse();
// console.log(myArray);


//.push("item to push"); - add to end of array
// myArray.push("Bird");
// myArray.push("Owl");
// console.log(myArray);

//.pop() - remove from end of array
// myArray.pop();
// console.log(myArray);

// .shift() removes from the front of the array
// myArray.shift();
// console.log(myArray)

// .unshift("item to add") - adds the start of the array
// myArray.unshift("Cow");
// console.log(myArray);

// indexOf("item you are looking for") - returns the index where the item is located
// console.log(myArray.indexOf("Deer"));

// .splice("num to remove from") - removes item at that index and everything afterwards
// myArray.splice(2);
// console.log(myArray);

// .splice(2, 4) first number is where you start, 2nd is how many to remove 
// let splicedSection = myArray.splice(2, 1);
// console.log(splicedSection);
// console.log(myArray);

// .slice(starting index, index you want to end before) first number is inclusive, the 2nd number is exclusive
// creates a new array of the slice you took and leaves myArray the same
// let newArray = myArray.slice(1,4);
// console.log(newArray);
// console.log(myArray);

// let array2 = ["Water", "Food" , "Air"];

//.concat(array you want to add) - appends array in parenthesis to end of array you called the .concat() method on
// console.log(array2.concat(myArray));
// console.log(array2);


//.join() combines array elements into 1 string separated by commas
// console.log(array2.join());