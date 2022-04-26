// 1. Reverse a String
function reverseString(str) {
// Using built-in methods

    // let strArr = str.split("");
    // let reverseString = strArr.reverse();
    // let reversedString = reverseString.join("");
    // return reversedString;

    // return str.split("").reverse().join("");

// Using for loop
    let final = "";
    for(let i=str.length-1; i>=0; i--) {
        // console.log(str[i]);
        final += str[i];
    }
    return final.toUpperCase();
}

console.log(reverseString("chaitra"));