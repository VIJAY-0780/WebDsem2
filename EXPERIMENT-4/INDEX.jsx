function getResult(){
let count = document.getElementById("subCount").value;
if(count <= 0){
alert("Enter proper subject count");
return;
}
let sum = 0;
for(let i=1;i<=count;i++){
let m = parseFloat(prompt("Marks for Subject " + i));
if(isNaN(m)){
alert("Invalid input detected");
return;
}
sum += m;
}
let avg = sum / count;
let grade;
let status;
if (avg >= 90) {
grade = "A+";
} else if (avg >= 75) {
grade = "A";
} else if (avg >= 60) {
grade = "B";
} else if (avg >= 50) {
grade = "C";
} else {
grade = "F";
}
if (avg >= 40) {
status = "PASS";
} else {
status = "FAIL";
}
document.getElementById("outputBox").innerHTML =
"Total = " + sum + "<br>" +
"Average = " + avg.toFixed(2) + "<br>" +
"Grade = " + grade + "<br>" +
"Result = " + status;
}