index = 0;
array = [1, 2, 3, 4, 5, 6];

const under_five = x => x < 5;

if (array.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}

index = 0;
array = [1, 2, 3, 4, 5, 6];
square = x => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);

array = [1, 2, 3, 4, 5, 6];

even = x => x % 2 === 0;
evens = array.filter(even);
console.log(array);
console.log(evens);

array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc, curr) => acc + curr
sum = array.reduce(helperSum, 0);

console.log(array)
console.log(sum);