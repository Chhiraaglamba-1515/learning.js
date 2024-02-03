const name = "chirag"
const lastName = "lamba"

// console.log(name + lastName);  // outdated method 

console.log(`hello my first name is ${name} and my last name is ${lastName}`);  // modern method

console.log(`hello my first name is ${name.toUpperCase()} and my last name is ${lastName}`);  // uppercase function is used with the constant name ...

//======================================================

const mySelf = new String(' my name is Chirag ')

//<<<<<<<<<<<<<<<<<<<<some methods for strings>>>>>>>>>>>>>>>>>>
console.log(mySelf.charAt(0));
console.log(mySelf.indexOf('C'));

console.log(mySelf.substring(10, 14));
console.log(mySelf.slice(-8, 13));

console.log(mySelf.trim());
