function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

  //  Bind the event handler to the "submit" JavaScript event
  $('form').submit(function () {

    // Get the Login Name value and trim it
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var message =$.trim($('#message').val());
  
    // Check if empty of not
    if (name === '') {
        alert('Your name is empty.');
        return false;
    }
    else if (email === '') {
        alert('Your email is empty.');
        return false;
    }
    else if (message === '') {
        alert('Your Email is empty.');
        return false;
    }
  });