// var result = {
//   'Moe' : 18,
//   'Larry' : 19,
//   'Curly' : 20,
//   'Jane' : 20,
//   'Emma' : 21,
//   'Elizabeth' : 18,
//   'Elinor' : 23,
//   'Mary' : 25,
//   'Darcy' : 24,
//   'Grey' : 18,
//   'Lydia' : 24,
//   'Harriet' : 18}
//
// console.log(result);

var result = "'Moe' is 18 'Larry' is 19 'Curly' is 20 'Jane' is 20 'Emma' is 21 'Elizabeth' is 18 'Elinor' is 23 'Mary' is 25 'Darcy' is 24 'Grey' is 18 'Lydia' is 24 'Harriet' is 18";
console.log(result + '\n');
var result2 = result.replace(/is/g, ':');
console.log(result2 + '\n');
var result3 = result2.replace(/ '/g, ",\n'");
console.log(result3 + '\n');
var result4 = '{' + result3 + '}';
console.log(result4);

var r5 = typeof result4;
console.log(r5);
