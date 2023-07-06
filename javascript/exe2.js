//given a string 's' consisting of words and spaces, return the length of the last word in the string. example
//a. s= "hello world" output: "the last word is "world" with length 5"

function lengthOfLastWord(s) {
    // Trim any leading or trailing spaces
    s = s.trim();
  
    // Split the string into an array of words
    var words = s.split(" ");
  
    // Get the last word from the array
    var lastWord = words[words.length - 1];
  
    // Return the length of the last word
    return lastWord.length;
  }

let s = "fly me to the moon";
let length = lengthOfLastWord(s);
console.log("The last word is \"" + s.split("").pop() + "\" with length " + length);