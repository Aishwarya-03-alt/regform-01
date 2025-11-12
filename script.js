$(document).ready(function() {
  $("#regForm").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "submit.php",
      data: $(this).serialize(),
      success: function(response) {
        $("#result").html(response);
        $("#regForm")[0].reset();
      }
    });
  });
});
