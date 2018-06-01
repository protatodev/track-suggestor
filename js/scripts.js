$(document).ready(function() {

  $("#submit").click(function() {
    $(".pre-hidden").show();
  });

  $("#reset").click(function() {
    $("input").attr("disabled", false);
    $("span").text("");
    $(".pre-hidden").hide();
  });

  $("input").click(function() {
    $(this).attr("disabled", true);
  });

});
