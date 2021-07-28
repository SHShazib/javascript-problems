var age = [20, 42, 45, 26, 47, 28, 30];

var sum = 0;
for (var i=0; i<age.length; i++){
    var element = age[i];
    sum = sum + element;
}
console.log("The sum of these ages are : ", sum);





// with Function
 function arraySum(sum){
     var sum = 0;
     for (var i=0; i<age.length; i++){
         var element = age[i];
         sum = sum + element;
     }
     return sum;
 }
 var total = arraySum(age);
 console.log("The total of these ages are :", total);