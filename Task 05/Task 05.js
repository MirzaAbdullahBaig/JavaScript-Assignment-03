// Task 05: Write a JavaScript program to remove all duplicate items from an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : [3, ‘a’, 2, 4, 9]

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let singleChars = [...new Set(arr1)];

document.write(`<b> ${singleChars}`);