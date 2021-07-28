var num = [2, 4, 3, 3, 2, 5, 7, 23, 1, 2, 4, 3, 1, 2];
var uniqueName = [];

for(var i=0; i<num.length; i++){
    var element = num[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log("This is the unique array : ", uniqueName); 



// Another time 
var list = [1,2,3,3,1,1,2,2,3,3,4,4,5,6,7,9];
var newList = [];

for (var i=0; i<list.length; i++){
    var element = list[i];
    var index = newList.indexOf(element);
    if (index == -1){
        newList.push(element);
    }
}
console.log("New List :", newList);