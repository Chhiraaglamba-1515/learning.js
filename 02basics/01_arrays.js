//Array 

const myArr = [1, 0, 2, 5, 6, 8]
const myArr2 = [22, 23, 24]


const myArr3 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//===== Array Methods ======

// myArr.push(5)
// myArr.pop()

// myArr.unshift(7)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr);


//======== Slice and Splice ======

console.log("A", myArr);

const my1 = myArr.slice(1, 3)    //it does not manipulate the original array
console.log(my1);
console.log("B", myArr);

const my2 = myArr.splice(1, 3) //it do manipulate the original array
console.log(my2);
console.log("C", myArr);
