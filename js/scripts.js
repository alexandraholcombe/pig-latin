//business logic
var userInput = 0;

var translate = function(input) {
  return input;
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
