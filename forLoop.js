// printing numbers 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// printing even numbers from 1-20
for (let j = 0; j < 20; j += 2) {
    console.log(j)
}
// printing odd numbers from 1-20
for (let k = 0; k < 20; k += 1) {
    console.log(k)
}
// sum of all natural numbers from 1-100
sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(sum);
}
// finding min & max number from an array
const array = [54, 85, 65, 12, 78, 96];
let min = array[0];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
    else {
        max = array[i];
    }
}
console.log(min);
console.log(max);
// array of even & odd numbers
const numbers = [5, 8, 9, 4, 10, 58, 74, 99, 45];
let even = [];
let odd = [];
for (let l = 0; l < numbers.length; l++) {
    if (numbers[l] % 2 === 0) {
        even.push(numbers[l]);
    }
    else{
        odd.push(numbers[l]);
    }

}
console.log(even);
console.log(odd);

// using filter method
const num = [7,8,5,6,3,12,45,65,89]
function evenNum(i){
    return i%2===0;
}
const output = num.filter(evenNum);
console.log(output);
// checking if items in array is divisble by 4 if yes then returning new array by adding 10 to it using for loop and filter/map method
const num1 = [2,8,5,16,24,12];
function num4(i){
    return i%4===0;
}
const num5 = num1.filter(num4);
function mapNum(i){
    return i+10;
}
const num6 = num5.map(mapNum);
console.log(num5);
console.log(num6);

const numb1 = [2,8,5,16,24,12];
let numb2 = [];
for(let i=0;i<numb1.length;i++){
    if(numb1[i]%4===0){
        numb2.push(numb1[i]+10)
    }
    else{
        numb2.push(numb1[i]);
    }
}
console.log(numb2);
// given sorted array find the pair of elements whos sum is zero
const numb3 = [-5,-4,-3,-2,0,2,4,6,8]
const numb4 = [];

for(i=0;i<numb3.length-1;i++){
    for(j=i;j<numb3.length;j++)
    if(numb3[i]+numb3[j]===0){
        numb4.push(numb3[i],numb3[j]);
    }
}
console.log(numb4);

// let arra1 = [0,0,0,0,2,3,1,2,3,0,1,2,2];
// let arra2 = [0,0,4,8,2,3,1,2,3,0,1,2,2];
// const getData = (arrs) => {
//     let res = {};
//     for(let i=0;i<arrs.length;i++){
//         if(res[arrs[i]] == undefined){
//             res[arrs[i]]==1
//         }
//         else{
//             res[arrs[i]]++

//         }
//         for(const property in res){
//             console.log(`${property}:${res[property]}`);
//         }
//     }
// }  
// console.log(getData(arra1));
// console.log(getData(arra2));
let arr1 = [0, 0, 0, 0, 2, 3, 1, 2, 3, 0, 1, 2, 2];
let arr2 = [0, 0, 4, 8, 2, 3, 1, 2, 3, 0, 1, 2, 2];

const getData = (arrs) => {
    let res = {}
    for (let i = 0; i < arrs.length; i++) {
        if (res[arrs[i]] === undefined
            ) { res[arrs[i]] = 1; }
        else { res[arrs[i]]++ }
    }
    for (const property in res) {
      console.log(`${property}: ${res[property]}`);
    }
}

getData(arr1)
getData(arr2)

const numbers5 = [0,1,2,1,1,2,0,1,0,1];
let count0 = [0];
let count1 = [0];
let count2 = [0];
for(let i=0;i<numbers5.length;i++){
    if(numbers5[i]==0){
        count0++
    }
    else if(numbers5[i]==1){
        count1++
    }
    else{
        count2++
    }
}
console.log(count0);
console.log(count1);
console.log(count2);

// iterating through object using for in loop
const student = {
    namez:"sanjay",
    USN:"2KA06ME019",
    BRANCH:"MECHANICAL"
}
for(let details in student){
    console.log(`${details}=>${student[details]}`)
}

// updating values of properties using for in loop
const emp = {
    sanjay:48000,
    vinay:45000,
    lakshmikant:120000
}
for(let currency in emp){
    let curr = "₹" + emp[currency];
    console.log(`${currency}:${curr}`)
}