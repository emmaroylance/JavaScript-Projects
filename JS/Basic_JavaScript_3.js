function Subtraction_Function() {
    var subtraction = 5 - 1;
    document.getElementById("Math").innerHTML = "5 - 1 = " + subtraction;
}
function Addition_Function() {
    var addition = 3 + 2;
    document.getElementById("Add").innerHTML = "3 + 2 = " + addition;
}
function Multiplication_Function() {
    var simple_Math = 1 * 5;
    document.getElementById("Multiply").innerHTML = "1 x 5 = " + simple_Math;
}

function Division_Function() {
    var division = 10 / 2;
    document.getElementById("Divide").innerHTML = "10 / 2 = " + division;
}
function Lots_of_Math() {
    var easy_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math_Galore").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + easy_Math;
 }
 function Remainder_Function() {
     var remainder = 30 % 8;
     document.getElementById("Remainder").innerHTML = "The remainder of 30 / 8 = " + remainder;
 }
 function Negation_Operator() {
     var x = 5;
     document.getElementById("Negative").innerHTML = -x;
 }
 function Increment_Operator() {
     var X = 4;
     X++;
     document.write(X);
 }
 function Decrement_Operator() {
     var Y = 3;
     Y--;
    document.write(Y);
 }
window.alert(Math.random() * 3);
function Square_Root_Function() {
    var B = 64;
    Math.sqrt(64);
    document.getElementById("Square_Root").innerHTML = "The square root of 64 = " + Math.sqrt(B);
}