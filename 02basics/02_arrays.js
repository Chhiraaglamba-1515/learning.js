const car = ["audi", "merc", "bmw"]
const bike = ["honda", "suzuki", "kawasaki"]

car.push(bike) // merging 2 array method 1

// console.log(car);        
// console.log(car[3]);
// console.log(car[3][2]);

const allBrands = car.concat(bike) // merging 2 array method 2
// console.log(allBrands);

const allN = [...bike, ...car]  // merging 2 array method 3
// console.log(allN);

const newArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 7]]]
 
const anotherNewArray = newArr.flat(2) // sorting the newArr
// console.log(anotherNewArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 