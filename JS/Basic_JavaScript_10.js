function Call_Loop() {
    var Digit = "";
    var Y = 20;
    while (Y > 0) {
        Digit += "<br>" + Y;
        Y--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length_Function() {
    var str = "The world is round!";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
}

function for_Loop() {
    var Instruments = ["Piano", "Viola", "Clarinet", "Trombone"]
    var Content = "";
    var Y
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; 
}

function array_Function() {
    var Fruit = [];
    Fruit[0] = "Pear";
    Fruit[1] = "Mango";
    Fruit[2] = "Pineapple";
    Fruit[3] = "Grape";
    Fruit[4] = "Apple";
    document.getElementById("Array").innerHTML = "My favorite fruit is " + Fruit[2] + ".";
}

function Constant_function() {
    const Dog_1 = {type:"wheaten", age:"7 years", color:"blonde"};
    Dog_1.color = "brown";
    Dog_1.price = "$950";
    Dog_1.size = "medium";
    document.getElementById("Constant").innerHTML = 
    "The color of the " + Dog_1.type + " was " + Dog_1.color + 
    " and the size of the " + Dog_1.type + " was " + Dog_1.size;
}

var X = 22;
function Let_function() {
    let X = 33;
    document.write(X);
}
document.write(X);

var ret = Return_function(5, 6);
function Return_function(r, t) {
    return t - r;
}
document.getElementById("Return").innerHTML = ret;

let piano = {
    brand: "Steinway",
    color: "brown",
    price: "$35,500",
    description: function() {
        return "The piano is a " + this.color + this.brand + " and it costs " 
        + this.price;
    }
};
document.getElementById("Let_2").innerHTML = piano.description();

function Break_function() {
    var text = "";
    var i;
    for (i = 1; i < 20; i++) {
        if (i === 8) {break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}

// This function will skip the number 8
function Continue_function() {
    var text ="";
    var b;
    for (b = 1; b < 20; b++) {
        if (b === 8) { continue; }
        text += "The number is " + b + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}