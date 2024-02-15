// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12abs"
tinderUser.name = "Chiku"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "chiku@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chirag",
            lastname: "lamba"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


 const obj1 = {a:1, b:5};
 const obj2 = {b:3, c:4};

//  const obj3 = Object.assign(obj1, obj2);

//  console.log(obj3);
//  console.log(obj3 === obj1);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        name:"Chirag"
    }
    ,{
        id: 2,
        name:"harhsit"
    },
    {
        id: 3,
        name:"abhishek"
    }
]

users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //it return the keys
// console.log(Object.values(tinderUser)); //it returns the values of the keys
// console.log(Object.entries(tinderUser)); //it binds and returns keys and its values

// console.log(tinderUser.hasOwnProperty('name')); // it tells if it holds any property asked by the user....


//=============De-structure==========

const course = {
    coursename: "bca",
    price:"456",
    courseinstructor: "me"
}

const {courseinstructor: teacher} = course  //destructuring 

// console.log(teacher);


//============API==========

