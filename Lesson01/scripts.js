//Name: Says hello via string interpolation
$(function() {
  $(".name-submit").click(function() {
    //string interpolation
    alert(`Hello, ${$(this).siblings().val()}. Nice to meet you.`);
  })
});


//Email: contains @ via "includes"
$(function() {
  $(".email-submit").click(function() {
    alert(`Email is ${$(this).siblings().val().includes("@")`});
  })
});

//Zipcode: is >1000 via "filter"
$(function() {
  $(".zipcode-submit").click(function() {
    zipcode = $(".zipcode-submit");
    const number = zipcode.val();
    const result = array1.filter(number.length > 1000);
    //Alerts words found

    alert(result);

  })
});

//Lucky number: playing around with Codepen example in manipulating the input value via reduce
$(function () {
    // Set up some data and variables
    const input = [10, 20, 30, 40],
        input = $('.lucky-input'),
        submit = $('.lucky-submit'),
        resultSum = $('.sum', value);

        return sum + value;
});
