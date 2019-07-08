//FEEDBACK: Check your backticks (``) in your template strings, make sure they are within the closing parenthesis if they are a parameter.

//You've used document ready declarations for each instance of your functionality, but you'll be fine with just one wrapping document ready block for all of your code.

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
    const result = zipcode.filter(number.length > 1000);
    //Alerts words found

    alert(result);

  })
});

//In your zipcode function, you've got an array1 that doesn't exist and you'll want tot check the syntax on using filter.

//Lucky number: playing around with Codepen example in manipulating the input value via reduce
$(function () {
    // Set up some data and variables
    const input = [10, 20, 30, 40],
        input = $('.lucky-input'),
        submit = $('.lucky-submit'),
        resultSum = $('.sum', value);

        return sum + value;
});

//You'll also want to check the lucky number entry as the sum variable doesn't exist, and you can't return from a non-running function.
