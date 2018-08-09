$(document).ready(function(){
  $("#form-1").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#user-age-input").val());
    var state = $("#state-select").val();

    if(age >= 18) {
      $("#minor").hide();
      $("#of-age").show();
    } else {
      $("#of-age").hide();
      $("#minor").show();
    }
  });
});
