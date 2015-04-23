$(document).ready(function(){
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
  var dataSource = new Firebase('https://12cos-data.firebaseio.com/');
  var feedbackRef = dataSource.child('feedback');
  feedbackRef.orderByChild("written").on("child_added", function(comment) {
    console.log(comment);
    $( "#comments" ).append("<p>" + comment.val().author + " said: " + comment.val().comment + "</p>");
  });
});
