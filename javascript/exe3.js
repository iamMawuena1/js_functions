//given an integer "x", returns true if x is a palindrome.
function isPalindrome(num) {
    if(num < 0) {
        return false;
    }

    let string = num.toString();
    let reverseStr = str.split("").reverse().join("");

    return str === reverseStr;
}

let num = 6458;
let palindrome = isPalindrome(num);
console.log(palindrome);