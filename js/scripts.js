//business logic
var userInput = 0;
var vowels = ["a", "e", "i", "o", "u"];
var translate = function(input) {
  var inputControl = 0;
  for(index = 0; index <= 4; index++){
    console.log(index);
    if(input[0]===vowels[index]){
      inputControl = 1;
      return input.concat("ay");
    };
  }
  if (!inputControl){
    return input;
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
