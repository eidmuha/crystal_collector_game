// Global functions:
// generating random numbers b/w two numbers
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// When the document is ready, this function will automatically executes
$(function() {
    var rNumbers = getRandomInt(18, 120);
    $("#randomNumber").text(rNumbers)
    
});