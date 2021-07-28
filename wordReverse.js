

function wordRevesrse(sentence){
    var reverse = " ";
    for (var i=0; i<sentence.length; i++){
    var char = sentence[i];
    reverse = char + reverse;
   }
   return "Reverse sentence is : " + reverse;
}

var sentence1 = "ENOYREVE OLLEH >-- HELLO EVERYONE";
var result = wordRevesrse(sentence1);
console.log(result);


var sentence2 = "HELLO EVERYONE >-- ENOYREVE OLLEH";
var result = wordRevesrse(sentence2);
console.log(result);