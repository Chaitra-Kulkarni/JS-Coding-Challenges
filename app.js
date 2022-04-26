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
// console.log(reverseString("chaitra"));


// 2. Print all even numbers between 0 and 10

    for(let i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
