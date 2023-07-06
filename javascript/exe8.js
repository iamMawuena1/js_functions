//given a string "s", return the number of vowels in the string
function countVowels(s) {
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

let s = "Hello, World!";
let count = countVowels(s);
console.log(count);