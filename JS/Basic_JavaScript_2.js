function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}
function myFunction() {
    var sentence = "Today is going to";
    sentence += " be a great day!";
    document.getElementById("concatenate").innerHTML = sentence;
}