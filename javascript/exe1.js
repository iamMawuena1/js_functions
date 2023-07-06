//1. create function that takes in a string as an argument and returns its reversed form
function reverse(string) {
    return string.split("").reverse().join("");
}

let solution = reverse("javascript");
console.log(solution);