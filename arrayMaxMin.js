// Highset numbers
var age = [20, 42, 45, 26, 47, 28, 30];

var max = age[0];
for ( var i=0; i<age.length; i++){
    var element = age[i];
    if ( element>max){
        max = element;
    }
}
console.log("The Biggest Age is : ", max);



// Lowest Numbers
var age = [33, 42, 45, 36, 57, 48, 50];

var min = age[0];
for (var i=0; i <age.length; i++){
    var element = age[i];
    if(element<min){
        min = element;
    }
}
console.log("The Lowest Age is : ", min);