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