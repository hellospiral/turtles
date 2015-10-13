$(document).ready(function() {
  var animal = (prompt ("Would you like to learn about turtles, snakes, or insects?"));

  if (animal === "turtles") {
    $('#turtles').show();
  } else if (animal === "snakes") {
    $('#snakes').show();
  } else if (animal === "insects") {
    $('#insects').show();
  } else {
    $('#other').show();
  }
});
