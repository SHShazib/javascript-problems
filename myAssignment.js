/*__________________Problem One__________________*/

function feetToMile(feet){
    var mile = feet / 5280;                           //1 mile = 5280 feet.
    return mile + " miles in feet.";
}
var result = feetToMile(79200);
console.log(result);


/*___________________________________________________________*/


/*__________________Problem two__________________*/

function woodCalculator(chair,table,bed){
    var woodChair = chair*1;                          //1 qubicfeet wood needed for a chair.
    var woodTable = table*3;                          //3 qubicfeet wood needed for a chair.
    var woodBed = bed*5;                              //5 qubicfeet wood needed for a chair.

    var totalWood = woodChair + woodTable + woodBed;
    return totalWood + " qubicfeet wood needed .";
}
var result = woodCalculator(12,3,2);
console.log(result);






/*__________________Problem three__________________*/

function brickCalculator(building){
    var brick = 1000;                                  //1 feet = 1000 bricks needed
    var feet =0;

    if (building >=1 && building <= 10){
        feet = 15;
        var total = building * feet * brick;
        return total + " bricks is needed to build ";
    }
    else if( building >= 11 && building <= 20){
        feet = 12;
        var total = building * feet * brick;
        return total + " bricks is needed to build ";
    }
    else if (building >= 20){
        feet = 10;
        var total = building * feet * brick;
        return total + " bricks is needed to build "
    }
}
var result1 = brickCalculator(7);
console.log(result1, "for 7th building.");
var result2 = brickCalculator(17);
console.log(result2, "for 17th building.");
var result3 = brickCalculator(27);
console.log(result3, "for 27th building.");







/*__________________Problem four__________________*/


/*__________________Small name__________________*/

function tinyName(name){
     var prevName = name[0];
    for (var i=0; i<name.length; i++){
        var newName = name[i];
        if (newName.length < prevName.length){
            prevName = newName;
        }
    }
    return prevName + " is the smallest name.";
}
var friends = ["Shazib","Rony","Rakib","Jahangir"];
var result = tinyName(friends);
console.log(result);



/*__________________Large name__________________*/



function largeName(name){
    
    var prevName = name[0];
    for(var i=0; i< name.length; i++){
        var currentName = name[i];
        if (currentName.length > prevName.length){
            prevName = currentName;
        }
    }
    return prevName + " is the largest name."

}
var friends = ["Shazib","Rony","Rakib","Jahangir"];
var result = largeName(friends);
console.log(result);