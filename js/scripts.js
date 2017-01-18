//business logic
var userInput = 0;
var vowels = ["a", "e", "i", "o", "u"];
var vowelsVal = [];
var vvArray = [];

var vowelChecker = function(input) {
  inputArray = input.split("");
  for (inputIndex = 0; inputIndex < userInput.length; inputIndex++){
    vowels.forEach(function(vowel) {
      if (inputArray[inputIndex] === vowel) {
        vowelsVal.push(1);
      }
    })
    if(!vowelsVal[inputIndex]){
      vowelsVal.push(0);
    };
  };
  return vowelsVal;
};


var translate = function(input) {
  var piglatin = 0;
  if (parseFloat(input)) {
    return input;
  } else {
      vvArray = vowelChecker(input);
      if (!vvArray[0]){
        consonant = input.substring(0,1);
        rest = input.substring(1,input.length);
        return rest + consonant + "ay";
      }
  }
}
    // if(!piglatin){
    //
    //   consonant = input.substring(0,1);
    //   rest = input.substring(1,input.length);
    //   return rest + consonant + "ay";
    // }



//user interface logic
$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    var result = translate(userInput);
    $("#result").text(result);
  });
});


// testing
