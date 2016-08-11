$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var age = ($("input#age").val());

    if (age >= 18) {
      $("#over18").show();
      $("#under18").hide();
    } else {
      $("#over18").hide();
      $("#under18").show();
    }
  });
});
