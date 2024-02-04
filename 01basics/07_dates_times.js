let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);


// let createdDate = new Date(2023, 0, 5)
// let createdDate = new Date(2023, 0, 5)
// let createdDate = new Date(2023, 0, 5, 6, 2)
// console.log(createdDate.toLocaleString());

// console.log(Date.now());    //in milliseconds
// console.log(Date.now()/1000);   // in seconds
// console.log(Math.floor(Date.now()/1000));   // floor value of seconds


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})