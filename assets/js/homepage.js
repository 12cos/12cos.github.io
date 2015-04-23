$(document).ready(function(){
  //Start the slideshow.
  $('.slideshow').unslider();
  //This should have loaded after Firebase has loaded. Initialise the feedback window.
  $('#feedbackwindow').click(function(){
    var feedback = prompt("Enter your feedback in this box (keep it short!");
    var dataSource = new Firebase('https://12cos-data.firebaseio.com/');
    var feedbackRef = dataSource.child('feedback');
    feedbackRef.push({
      "comment": feedback
    });
  });
});
