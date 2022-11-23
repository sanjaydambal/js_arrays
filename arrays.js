const arr = ["lakshmikant","Sanjay","vinay","ganesh"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const arr2 = [2,5,8,9,14,19];
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

const arr3 = [58,78,95,65,45];
i=0;
while(i<arr3.length){
    console.log(arr3[i]);
    i++;
}

const arr4 = [5,8,9,7,6,2];
function arrayite(j,i,arr){
    console.log(j);
    // console.log(i);
    // console.log(arr[i]);
}
arr4.forEach(arrayite);

const arr5 = [4,9,3,7,6,2,54];
function multiply(i){
    return i*10;
}
console.log(arr5.map(multiply));

const arr6 = [8,5,16,15,34,56,4];
function evennum(i){
    return i%2 ===0;
}
console.log(arr6.filter(evennum));

var arr7 = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for(let i=0;i<arr7.length;i++){
    console.log(arr7[i]);
    console.log(arr7[i].age);
}

var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for(let profile of myArray){
    console.log(profile.age)
}

const arr8 = [8,9,5,4,6,10];
for(let numbers of arr8){
    console.log(numbers)
}

const arr9 = [54,85,65,47,96,52];
i=arr9.length-1;
do{
    console.log(arr9[i]);
    i--
}
while(i>=0);

var arr10 = [
    {id: 1, firstName: 'John', lastName: 'Smith', age: 12},
    {id: 2, firstName: 'Jane', lastName: 'Brown', age: 14},
    {id: 3, firstName: 'Martin', lastName: 'Johnson', age: 13},
    {id: 4, firstName: 'Katie', lastName: 'Miller', age: 17},
    {id: 5, firstName: 'Louis', lastName: 'Wilson', age: 11}
];



