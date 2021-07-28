// between two numbers

var x = 12;
var y = 7;

if (x < y){
    console.log("The smallest number is : ", x);
}
else{
    console.log("The smallest number is : ", y)
}


var x = 20 ;
var y = 25 ;
var z = 30 ;

if (x<y){
    if(x<z){
        console.log("The smallest number is : ", x);
    }
    else {
        console.log("The smallest number is : ", z);
    }
}
else {
    if(y<z){
        console.log("The smallest number is : ", y)
    }
    else{
        console.log("The smallest number is : ", z)
    }
}