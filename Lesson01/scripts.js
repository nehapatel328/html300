$(document).ready(function() {
$("#submit").click(function(event) {
console.log($("#name"));
alert($("#name").val());
});
});

$(function() {
  //Names button and click event
  $("#name-submit").click(function() {
    //Takes input value, uses string interpolation, and alerts a greeting
    alert(`Hello, ${$(this).siblings().val()}. Nice to meet you.`);
  })
});
