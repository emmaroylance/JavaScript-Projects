function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Horse":
            Animal_Output = "Horse" + Animal_String;
        break;
        case "Hippo":
            Animal_Output = "Hippo" + Animal_String;
        break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Class_Function() {
    var x = 
    document.getElementsByClassName("Class");
    x[0].innerHTML = "Good bye!"
}

// Create diagonal line within rectangle
var c=
document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,200);
ctx.stroke();

// Create Linear Gradient within rectangle
var d = document.getElementById("Canvas");
var rr = d.getContext("2d");
var grd = rr.createLinearGradient(0, 0, 170,0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
rr.fillstyle = grd;
rr.fillRect(0, 0, 300, 200);