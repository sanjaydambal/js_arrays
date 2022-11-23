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

