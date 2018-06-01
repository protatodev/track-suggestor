$(document).ready(function() {

  $("#submit").click(function() {
    var result = checkResults();
    var language;
    var type;

    var knowsDesktopCoding = $("#yesDesktop").is(":checked");
    var knowsWebDev = $("#yesWeb").is(":checked");
    var likesWebDev = $("#yesWebDev").is(":checked");
    var likesOOP = $("yesObject").is(":checked");
    var likesStronglyTyped = $("yesStrong").is(":checked");

    switch(result) {
      case 0:
      language = "C#";
      type = "strong";
      break;
      case 1:
      language = "Ruby";
      type = "strong";
      break;
      case 2:
      language = "Python";
      type = "weak";
      break;
      default:
      language = "Java";
      type = "strong"
      break;
    }

    $("#resultName").text($("#userName").val());
    $("#resultLanguage").text(language);
    $("#headerLanguage").text(language);
    $("#resultLanguageType").text(type);

    if(knowsDesktopCoding) {
      $()
    }


    $(".pre-hidden").show();
  });

  $("#reset").click(function() {
    $("input").attr("disabled", false);
    $("span").text("");
    $(".pre-hidden").hide();
  });

  $("input").click(function() {
    $(this).attr("disabled", true);
    $("#userName").attr("disabled", false);
  });

  function checkResults() {
    var knowsDesktopCoding = $("#yesDesktop").is(":checked");
    var knowsWebDev = $("#yesWeb").is(":checked");
    var likesWebDev = $("#yesWebDev").is(":checked");
    var likesOOP = $("yesObject").is(":checked");
    var likesStronglyTyped = $("yesStrong").is(":checked");

    if(knowsDesktopCoding && likesOOP && likesStronglyTyped) {
      return 0; // C#

    } else if(knowsWebDev && likesWebDev && likesOOP) {

      return 1; // Ruby
    } else if(!likesStronglyTyped && likesWebDev) {

      return 2; // Python
    } else {

      return 3; // Java
    }

  };

});
