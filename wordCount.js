var speech = "i am a good person. I don't snore at night. I sleep early. i want to become a web developer.";
var count =0;
for (var i=0; i < speech.length; i++){
    var word = speech[i];
    if( word == " " && speech [i-1]!=0){
        count++;
    }
}
count++;
console.log(count);