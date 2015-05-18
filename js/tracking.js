var Firebase = require('firebase');
// YOUR FIREBASE URL HERE
var database = new Firebase('https://lead-page-example.firebaseio.com');

$(function() {
  $('#submit-email').on('click', function(e) {
    database.child('emails').push({ email: $('#email').val() }, function(err) {
      if (err) {
        alert('There were problems saving your email');
      } else {
        alert('Thanks for subscribing!');
      }
    });

    analytics.track('Clicked Email Submit', {
      email: $('#email').val()
    });
  });
});
