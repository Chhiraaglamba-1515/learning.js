var d = 68           // global scope

if (true) {
    let a = 17    // local scope
const b = 37
var c = 87
}

// console.log(a);     
// console.log(b);
// console.log(c);

// let and const can not execute out of local scope   

//=============================================

function one() {
    const username = "chirag"
    
    function two() {
        const age = "22"
        // console.log(username);
    }
    // console.log(age);
    two()
}
one()

//=========================================

if (true) {
    const username = "chirag"
    if (username === "chirag") {
        const age = " 20"
        // console.log(username + age);
    }
    // console.log(age);
}
// console.log(username);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(addon(5));
function addon(num) {
    return num + 1
}


console.log(addtwo(5));    // it will not execute before initialization/ declaration
const addtwo = function (num) {
    return num + 2
}
