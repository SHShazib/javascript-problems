var num = 2.7465;

var result1 = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);

console.log("Normal =", num,", Floor =", result1,", Ceil =", result2,", Round =", result3);


// Randomly Chosen Numbers
for (var i=0; i<10; i++){
    var randomNumber = Math.random()*10;
    var output = Math.round(randomNumber);
    console.log("Random-Numbers: ", output);
}