//given an integer num, repeatedly adds all the its digits until the result has only one digit, and return it.
function addDigits(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

let num  = 1024;
let result  = addDigits(num);
console.log(result);