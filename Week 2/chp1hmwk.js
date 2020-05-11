//create 10 variables. All have to have different values.
// Once you have created the variables, create one last
//variable with all the varables added together.
// HINT: use the + sign to add the varables.

var name = "Erica"
var birthday = "March 17"
var age = "28"
var carName = "Volkwagon"
var state = "Missouri"
var color = "Pink"
var food = "Pizza"
var season = "Autumn"
var year = "2020"
var store = "Target"



//Global Variable - variables all by themselves
// Not insdie a scope or block : { <--scope/block --> }
var someGuy = "John";

var dayofParty = 23;

var lastGlobal = "Just Relax";

// Local Variables-variables belong to something
// inside a scope or block : { var a = 1; }
function simple (){
    var a = 1; // Local varable
}
for(var i = 0;i < 10; i++){
    console.log(i)
}