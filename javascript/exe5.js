//given an integer n, return true if its a power of two. 
//otherwise return false. An integer n is a power of two, 
//if there exists an integer x such that n == 2x

function isPowerOf2(n) {
    if (n <= 0) {
        return false; //negative numbers and zero are powers of two
    }

    //check if the number has only a single 1 bit using bitwise operation
    return (n &(n-1)) === 0;
}

let n = 49;
let isPower = isPowerOf2(n);
console.log(isPower);