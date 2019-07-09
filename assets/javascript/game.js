// Global functions:


// global variables
var randomGameNumber = 0;
var random_crystal1 = 0;
var random_crystal2 = 0;
var random_crystal3 = 0;
var random_crystal4 = 0;

var enteredNumber = 0;

var wins = 0;
var loses = 0;

// generating random numbers b/w two numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers(){
    random_crystal1 = getRandomInt(1, 12);
    random_crystal2 = getRandomInt(1, 12);
    random_crystal3 = getRandomInt(1, 12);
    random_crystal4 = getRandomInt(1, 12);

    randomGameNumber = getRandomInt(18, 50);
    $("#randomNumber").text(randomGameNumber)

    $("#wins").text(wins)
    $("#loses").text(loses)

    enteredNumber = 0;
}

// When the document is ready, this function will automatically executes
$(function() {

    // generating random numbers for the game between 18-120
    generateRandomNumbers()   

    var temp = 0 ;

    $(".img-responsive").click(function(e){      

        if(e.target.id == 'crystal1'){
            temp = random_crystal1;
        }else if(e.target.id == 'crystal2'){
            temp = random_crystal2;
        }else if(e.target.id == 'crystal3'){
            temp = random_crystal3;
        }else if(e.target.id == 'crystal4'){
            temp = random_crystal4;
        }

        var myVar = (enteredNumber+=temp)
        if (randomGameNumber==enteredNumber) {
            $("#wins").text(++wins)
            $("#rNumCrystal").text(0)
            generateRandomNumbers();
        }else if(enteredNumber>randomGameNumber){
            $("#loses").text(++loses)
            generateRandomNumbers()
            $("#rNumCrystal").text(0)
        }else if (enteredNumber<randomGameNumber){
            $("#rNumCrystal").text(myVar)
        }

    })

});