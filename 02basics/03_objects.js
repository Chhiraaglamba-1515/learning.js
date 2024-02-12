// singleton

// object literals
const JsUser = {
  name: "Chirag",
  age: 21,
  location: "delhi",
  email: "chirag@gmail.com",
};

// console.log(JsUser.age); 
// console.log(JsUser["age"]); //the correct type to log

JsUser.email = "chirag@yahoo.com"
// Object.freeze(JsUser) //freeze keyword stops any entity to change its value...
JsUser.email = "chirag@google.com"
// console.log(JsUser);

JsUser.greeting =  function(){
  console.log("hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());