//Name: Hello alert
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

//Zipcode: >1000
$(function() {
  $(".zipcode-submit").click(function() {
    zipcode = $(".zipcode-submit");
    const number = zipcode.val();
    const result = array1.filter(number.length > 1000);
    //Alerts words found

    alert(result);

  })
});

//City
$(function() {
  $(".city-submit").click(function() {
    city = [];
    city.forEach(function(value, key)) {
      alert("You are from" + key);
    }
  })
});
