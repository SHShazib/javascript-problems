// technic= 01
var name = "================Technic = 01================"
console.log(name);

var a = 10;
var b = 15;
console.log("Before swap the number: a =", a, ", b =",b);
var temp = a;
a = b;
b = temp;
console.log("After swap the number: a =", a, ", b =",b);


// Technic = 02
var name = "================Technic = 02================"
console.log(name);

var x = 11;
var y = 13;
console.log("Before swap the number: x =", x, ", y =",y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap the number: x =", x, ", y =",y);

// Technic = 02
var name = "================Technic = 03================"
console.log(name);
var p = 23;
var q = 27;
console.log("Before swap the number: p =", p, ", q =",q);
[p,q] = [q,p];
console.log("After swap the number: p =", p, ", q =",q);