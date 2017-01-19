//business logic
var userInput = 0;
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var vowelsVal = [];
var vvArray = [];
var piglatinword = [];

var concatAy = function(input, index) {
  consonant = input.substring(0,index);
  rest = input.substring(index,input.length);
  return rest + consonant + "ay"
}

var vowelChecker = function(input) {
  vowelsVal = [];
  inputArray = input.split("");
  for (inputIndex = 0; inputIndex < input.length; inputIndex++){
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


var wordtranslator = function(input) {
  var piglatin = 0;
  vvArray = vowelChecker(input);
  if (/[^\w\s]/g.test(input)||/[\d]/g.test(input)) {
    return input;
  } else if(input.charAt(0).toLowerCase()==="q" && input.charAt(1).toLowerCase()==="u"){
    return concatAy(input, 2);
  }else if(!(vvArray[0]) && input.charAt(1).toLowerCase()==="q" && input.charAt(2).toLowerCase()==="u"){
    return concatAy(input, 3);
  }else if(!(vvArray[0]) && !(vvArray[1]) && !(vvArray[2]) && !(vvArray[3])) {
    return concatAy(input, 4);
  } else if(!(vvArray[0]) && !(vvArray[1]) && !(vvArray[2])) {
    return concatAy(input, 3);
  } else if(!(vvArray[0]) && !(vvArray[1])) {
    return concatAy(input, 2);
  } else if(!vvArray[0]){
    return concatAy(input, 1);
  }else{
    return input + "ay";
  }
}

var translate = function(input) {
  piglatinword = [];
  words = input.split(" ");
  console.log(words);
  words.forEach(function(word){
    var translateWord = wordtranslator(word)
    piglatinword = piglatinword.concat([translateWord]);

  })
  return piglatinword.join(" ");
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

// for (ind = 0; ind <= 3; ind++){
//   if (!vvArray[ind]){
//     consonant = input.substring(0,ind+1);
//     rest = input.substring(ind+1,input.length);
//   }
// }
//     return rest + consonant + "ay";
// }else{
//   return input + "ay"
// }
