// let num = 10;
// for(let i = 1; i < num; i++){
//     console.log(i+" ")
// }

// Array

let p1 = "Harkirat";
let p2 = "Negi";
let p3 = "Singh";

let people = ["Harkirat", "Negi", "Singh"];

console.log(people[2]);
console.log(people[0]);
console.log(people[1]);
console.log(people[3]);

const ages = [21, 22, 23, 24];

for(let i = 0; i < ages.length; i++){
    console.log(ages[i]+" ");
}

// Write a program to print the bigest number in Array

let arr = [3, 11, 0, 1, 13, 17, 23, 12];

let m = arr[0];

for (let i = 0; i < arr.length; i++){
    if(arr[i] > m){
        m = arr[i];
    }
}
console.log(m);

// Object
const user1 = {fName: "Harkirat", gender:"male"}

console.log(user1["fName"]);
    