//given an array of numbers, calculate the sum of numbers within that array
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
}
  
let numbers = [1, 2, 3, 4, 5];
let sum = calculateSum(numbers);
console.log(sum);