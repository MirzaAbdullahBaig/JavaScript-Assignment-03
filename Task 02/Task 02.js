// Task 02: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students:

student = ["Jalib", "Hamza", "Bilal"]
score = [225, 195, 180]
var totalmarks = 300;


for (var i = 0; i < score.length; i++) {
    per = score[i] / totalmarks * 100;
    document.write(`Score of ${student[i]} is ${score[i]}. Percentage: ${per} <br/> <br/>`)
}