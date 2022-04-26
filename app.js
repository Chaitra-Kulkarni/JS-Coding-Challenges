// 1. Reverse a String
function reverseString(str) {
    let strArr = str.split("");
    let reverseString = strArr.reverse();
    let reversedString = reverseString.join("");
    return reversedString;
}

console.log(reverseString("chaitra"));