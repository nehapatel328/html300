//Name
$(function() {
  $("#name-submit").click(function() {
    //string interpolation
    alert(`Hello, ${$(this).siblings().val()}. Nice to meet you.`);
  })
});


//Email: contains @
$(function() {
  //Names button and click event
  $(".email-submit").click(function() {
    alert(`Email is ${$(this).siblings().val().includes("@")`});
  })
});
