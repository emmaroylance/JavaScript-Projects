function validateForm() {
    var x = document.forms["myForm"]
    ["firstname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
    ["lastname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}