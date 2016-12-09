// Write a program that takes two 10 element arrays and creates an object using the elements of the first as the key and the elements of the second as the values.

var arrayFoo = ['foo1', 'foo2', 'foo3'];
var arrayBar = ['bar1', 'bar2', 'bar3'];

var result = {};
for (x = 0; x < arrayFoo.length; x++) {
	result[arrayFoo[x]] = arrayBar[x];
}
console.log(result);
