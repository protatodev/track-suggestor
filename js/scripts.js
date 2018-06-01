$(document).ready(function() {
  $(".pre-hidden").hide();

  $(".superForm").submit(function(event) {
    var result = checkResults();
    var language;
    var type;

    var knowsDesktopCoding = $("#yesDesktop").is(":checked");
    var knowsWebDev = $("#yesWeb").is(":checked");
    var likesWebDev = $("#yesWebDev").is(":checked");
    var likesOOP = $("#yesObject").is(":checked");
    var likesStronglyTyped = $("#yesStrong").is(":checked");

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
    $("#langHeader").text(language);

    if(knowsDesktopCoding) {
      $("#resultDesktop").text("do");
    } else {
      $("#resultDesktop").text("do not");
    }

    if(knowsWebDev) {
      $("#resultWeb").text("do");
    } else {
      $("#resultWeb").text("do not");
    }

    if(likesWebDev) {
      $("#resultWebDev").text("interest in web development");
    } else {
      $("#resultWebDev").text("no interest in web development");
    }

    if(likesOOP) {
      $("#resultObject").text("interest in object-oriented programming");
    } else {
      $("#resultObject").text("no interest in object-oriented programming");
    }

    if(likesStronglyTyped) {
      $("#resultTyped").text("strongly");
    } else {
      $("#resultTyped").text("weakly");
    }


    $(".pre-hidden").hide().fadeIn(3000);
    window.scrollTo(0,document.body.scrollHeight);
    event.preventDefault();
  });

  $("#resetButton").click(function() {
    $("input").attr("disabled", false);
    $("span").text("");
    $(".pre-hidden").show().fadeOut();
  });

  $("input").click(function() {
    $(this).attr("disabled", true);
    $("#userName").attr("disabled", false);
  });

  function checkResults() {
    var knowsDesktopCoding = $("#yesDesktop").is(":checked");
    var knowsWebDev = $("#yesWeb").is(":checked");
    var likesWebDev = $("#yesWebDev").is(":checked");
    var likesOOP = $("#yesObject").is(":checked");
    var likesStronglyTyped = $("#yesStrong").is(":checked");

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
