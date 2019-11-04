function my_Dictionary() {
    var Family = {
        Mom: "Karalee",
        Dad: "Kent",
        Sister: "Rose",
        Grandma: "Susan",
        Grandpa: "Robert"
    };
    delete Family.Mom;
    document.getElementById("Dictionary").innerHTML = Family.Mom;
}