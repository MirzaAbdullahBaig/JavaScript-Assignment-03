// Task 03: Initialize an array with color names. Display the array elements in your browser.

colour = [" red", " green", " blue", " yellow"];
document.write(`Initial Array is = ${colour} <br/>`);


// A:  Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

var addcolor = prompt("Add color to the beginning")

colour.splice(0, 0, addcolor);
document.write(`After Adding colour Array is = ${colour} <br/>`);


//  B: Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

var addcolorlast = prompt("Add color in the end of the array")

colour.push(addcolorlast);
document.write(`After Adding colour in last Array is = ${colour} <br/>`);

//  C: Add two more colors to the beginning of the array. Display the updated array in your browser.

colour.splice(0, 0, "Pink" , "Baby Blue");
document.write(`After Adding two more colour in starting of Array is = ${colour} <br/>`);


//  D: Delete the first color in the array. Display the updated array in your browser.

colour.shift(1);
document.write(`After deleting the first colour Array is = ${colour} <br/>`);


//  E: Delete the last color in the array. Display the updated array in your browser.

colour.pop();
document.write(`After deleting the last colour Array is = ${colour} <br/>`);

// F: Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser. 

var indexcolor = parseInt (prompt("Enter a number at which index you want to add"));
var useraddcolor = prompt ("Enter a color you want to add");

colour.splice(indexcolor, 0, useraddcolor);
document.write(`After Adding colour in user index, Array is = ${colour} <br/>`);

// G: Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.

var deletecolor1 = parseInt (prompt("Enter a number at which index you want to delete color"));
var deletecolor2 = parseInt (prompt("Enter a number of quanity to delete color"));

colour.splice(deletecolor1, deletecolor2);
document.write(`After Adding colour in user index, Array is = ${colour} <br/>`);