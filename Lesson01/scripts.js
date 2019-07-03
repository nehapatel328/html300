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

$(function() {
  //Names button and click event

  $(".zipcode-submit").click(function() {
    zipcode = $(".zipcode");
    const number = zipcode.val();
    const result = array1.filter(number.length > 1000);
    //Alerts words found

    alert(result);

  })
});
