document.write(typeof [1, 2, 3, 4]);
function My_Function() {
    document.getElementById("Test").innerHTML= 0/0;
}
function My2_Function() {
    document.getElementById("Test1").innerHTML= isNaN('54');
}
function My3_Function() {
    document.getElementById("Test2").innerHTML= isNaN('Home');
}
document.write(-5E500);
document.write(5E500);
document.write(10<5);
document.write(5<10);
console.log(2 + 5);
document.write("10" + 10);
console.log(10<5);
document.write(15 == 13);
document.write(13 == 13);

X = 10;
Y = 13;
document.write(X===Y);

A = 10;
B = 10;
document.write(A===B);

C = 5;
D = "5";
document.write(C===D);

E = 5;
F = "7";
document.write(E===F);

document.write(5 < 3 && 10 >4);
document.write(2 > 1 && 3 < 22);

document.write(5 > 8 || 3 < 1);
document.write(5 < 8 || 3 < 1);

function not_Function() {
    document.getElementById("Not").innerHTML = !(8 > 3);
}
function not_Function1() {
    document.getElementById("Not1").innerHTML = !(8 < 3);
}