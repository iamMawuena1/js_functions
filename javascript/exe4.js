//given an integer array "nums", return true if any value appears at least twice in the array, and return fasle if every element is distinct
function isDuplicate(nums) {
    let seen = new Set();

    for (let i = 0; i < array.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        
        seen.add(nums[i]);
    }

    return false;
}

let nums = [1,2,3,4];
let hasDuplicate = isDuplicate(nums);
console.log(hasDuplicate);

