// 1. Write a program prints all the even numbers in an array
let ar = [2, 19, 4, 22, 10, 88, 198];
for (let i = 0; i < ar.length; i++) {
  if (ar[i] % 2 == 0) {
    console.log(ar[i]);
  }
}

// 2. Write a program to print the biggest number in an arrya

let arr = [0, 19, 22, 1, 3, 11, 90];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("largest num in Arrays is: " + max);
// 3. Write a program that prints all the male people’s first name given a complex object

let obj = [
  { fName: "Sushant ", gen: "male" },
  { fName: "Shivanshu", gen: "male" },
  { fName: "Shobha", gen: "female" },
];

for(let i = 0; i < obj.length; i++){
    if(obj[i]["gen"] == "male"){
        console.log(obj[i]["fName"]);
    }
}
// 4. Write a program that reverses all the elements of an array

let arrs = [2, 19, 4, 22, 10, 88, 198];
for(let i = arrs.length-1; i >= 0; i--){
    console.log(arrs[i]);
}