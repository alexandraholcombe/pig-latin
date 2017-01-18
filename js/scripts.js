//business logic
var userInput = 0;
var vowels = ["a", "e", "i", "o", "u"];

var translate = function(input) {
  var piglatin = 0;
  if (parseFloat(input)) {
    return input;
  } else {
    for(index = 0; index <= 4; index++){
      console.log(index);
      if(input[0]===vowels[index]){
        piglatin = input.concat("ay");
        return piglatin;
        break;
      }
    }
    if(!piglatin){

      consonant = input.substring(0,1);
      rest = input.substring(1,input.length);
      return rest + consonant + "ay";
    }
  }
}



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
var vowelsVal = [];
var translate = function(input) {
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
  console.log(vowelsVal);
};

// var vowelsVal = [];
//
// var vowelChecker = function(inputIndex) {
//   for (inputIndex = 0; inputIndex > userInput.length; inputIndex++) {
//     if (inputIndex !== vowel) {
//       return 1;
//     } else {
//       return 0;
//     };
//   };
// };
//
// var translate = function(input) {
//   inputArray = input.split("");
//   inputArray.forEach(function(index) {
//     vowelCheckerResult = vowelChecker();
//     console.log(vowelCheckerResult);
//   });
// };
