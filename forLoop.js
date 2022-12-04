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
