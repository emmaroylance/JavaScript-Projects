function Full_Bio() {
    var part_1 = "Ha! You thought this ";
    var part_2 = "was going to be a bio? ";
    var part_3 = "Guess again, sucker!";
    var joke = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = joke;
}

function slice_Method_1() {
    var original_string = "Once there was a snowman";
    var slice_1 = original_string.slice(17);
    document.getElementById("Slice").innerHTML = slice_1;
}

function UpperCase_function() {
    var b = "This is real! This is me!";
    var c = b.toUpperCase();
    document.getElementById("Upper_Case").innerHTMl = c;
}

function Search_Function() {
    var a = "Jingle bells, jingle bells, jingle all the way!";
    var n = a.search("all");
    document.getElementById("Search_Method").innerHTML = n;
}

function string_Method() {
    var R = 25;
    document.getElementById("Numbers_to_string").innerHTML = R.toString();
}

function precision_method() {
    var s = 12351235.23425;
    document.getElementById("Precision").innerHTML = s.toPrecision(11);
}
function toFixed_Function() {
    var q = 3.24;
    var t = q.toFixed(8);
    document.getElementById("toFixed_1").innerHTML = t;
}
