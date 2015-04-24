$(document).ready(function(){
  //Start the slideshow.
  $('.slideshow').unslider({
    speed: 750,
    delay: 2500
  });
  //This should have loaded after Firebase has loaded. Initialise the feedback window.
  $('#feedbackwindow').click(function(){
    var name = prompt("Please enter your first name:");
    var feedback = prompt("Enter your feedback in this box (keep it short!)");
    var dataSource = new Firebase('https://12cos-data.firebaseio.com/');
    var feedbackRef = dataSource.child('feedback');
    feedbackRef.push({
      "comment": feedback,
      "author": name,
      "written": new Date()
    });
  });
});
