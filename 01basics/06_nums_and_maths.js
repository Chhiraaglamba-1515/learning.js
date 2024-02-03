const score = 400 
console.log(score);

const newScore = new Number(200)
console.log(newScore);

console.log(newScore.toString().length);
console.log(newScore.toFixed(2));

const nextScore = 52.5698
console.log(nextScore.toPrecision(2));

const comaScore = 100000000
console.log(comaScore.toLocaleString('en-IN'));


//========Maths======================

console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 2, 5, 4, 8, 9));
console.log(Math.max(4, 2, 5, 4, 8, 9));

console.log(Math.random());  // only random no. between 0 & 1

// method to display random value between required range >>>>>
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min);