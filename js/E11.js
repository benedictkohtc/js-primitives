// Write a program that takes an array of arrays of stings and converts to a single sorted string e.g.  [ ['apple', 'pear', 'orange'],  ['dog', 'mouse', 'cat'],  ['green', 'blue', 'red'] ] should become "apple,blue,cat,dog,etc"

var fruits = ['apple', 'pear', 'orange'];
var animals = ['dog', 'mouse', 'cat'];
var colours = ['green', 'blue', 'red'];

var result = fruits.concat(animals).concat(colours);
result = result.sort();
console.log(result);
