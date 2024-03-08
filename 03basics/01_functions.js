// function addition(n1, n2) {
//     console.log(n1 + n2);
// }
// addition(3, 4)


// function add2numbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = add2numbers(4,5)
// console.log("Result:", result);



function userMessage(username) {
    if (!username) {           // if statement is used for undefined value 
        // console.log("please enter the username");
        return
    }
    // return `${username} just logged in`
}

// console.log(userMessage("Chirag"));      //chirag just logged in
// console.log(userMessage(""));     // just logged in
// console.log(userMessage());     //UNDEFINED just logged in

function calCartPrice(...num1) {
    return num1
}
// console.log(calCartPrice(200, 500, 856));

const user = {
    username: "chirag",
    price: 200
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "jay",
    price:55
})