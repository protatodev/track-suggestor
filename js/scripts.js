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

    $("#moreInfo").text(language);

    if(result == 0) {
      $("#detailedLangInfo").text("C# was designed to be simple and easy to use. Since C# is a high level language, it reads somewhat closer to English. In addition, C# abstracts away (i.e. handles for you) most of the complex details of the machine (computer) so you can focus on programming instead of worrying about the little details many consider both tedious and difficult.If you're planning to get into C# game development, then Unity is also designed to be easy to get started with as well. As a lower level language than very high level languages such as Python, it may take time to learn everything about C#, and sometimes it may take a bit more code to get some working prototype. However, as you get a hang of things, C# will become easier.");
    } else if(result == 1) {
      
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
