var A = 25;
function Subtract_numbers_1() {
    document.write(20 - A + "<br>");
}
function Subtract_numbers_2() {
    document.write(40 - A + "<br>");
}
Subtract_numbers_1();
Subtract_numbers_2();

function Multiply_numbers_1() {
    var B = 5;
    document.write(5 * B + "<br>");
}
function Multiply_numbers_2() {
    document.write(2 * B);
}
Multiply_numbers_1();
Multiply_numbers_2();

function Time_1() {
    if (new Date().getHours() > 20) {
        document.getElementById("Bed").innerHTML = "Time for bed!";
    }
    else {
        document.getElementById("Bed").innerHTML = "Wakey wakey!";
    }
}
function Time_2() {
    if (5 > 3) {
        document.getElementById("Numbers").innerHTML = "The left number is greater than the number on the right.";
    }
}

function Kids_Function() {
    var a=document.getElementById("Kids_1").value;
    if (a >= 5) {
        document.getElementById("answer").innerHTML="Wow you have a big family!";
    }
    else if (a==4) {
        document.getElementById("answer").innerHTML="You have the same size of family as me!";
    }
    else {
        document.getElementById("answer").innerHTML="You have a little family!";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}