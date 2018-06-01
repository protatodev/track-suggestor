$(document).ready(function() {
  $(".pre-hidden").hide();
  resetForms();

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
      $("#detailedLangInfo").text("Ruby was originally designed with the goal of making programming fun, and in Japan, where it came from, Ruby was used to make games. Ruby is succinct and reads like English, which makes the code easy to understand for coding beginners. Since you'll be able to build prototypes quickly with Ruby on Rails, many find coding in Ruby a satisfying experience. As a dynamically typed language, Ruby does not have hard rules on how to build features, and it is very close to spoken languages. You'll have more flexibility solving problems using different methods. Furthermore, Ruby is also more forgiving of errors, so you'll still be able to compile and run your program until you hit the problematic part. Because Ruby is a dynamically typed language, the same thing can easily mean something different depending on the context.");
    } else if(result == 2) {
      $("#detailedLangInfo").text("Python was designed to be easy to understand and fun to use (its name came from Monty Python so a lot of its beginner tutorials reference it). Fun is a great motivator, and since you'll be able to build prototypes and tools quickly with Python, many find coding in Python a satisfying experience. Thus, Python has gained popularity for being a beginner-friendly language, and it has replaced Java as the most popular introductory language at Top U.S. Universities. Being a very high level language, Python reads like English, which takes a lot of syntax-learning stress off coding beginners. Python handles a lot of complexity for you, so it is very beginner-friendly in that it allows beginners to focus on learning programming concepts and not have to worry about too much details. As a dynamically typed language, Python is really flexible.");
    } else {
      $("#detailedLangInfo").text("Generally, Java was designed to be relatively beginner-friendly in that it assumes the programmer is not that smart or careful, so programmers will be less likely to shoot themselves in the foot when coding Java apps. Java is a high level language, which means Java abstracts away (i.e. handles for you) most of the complex details of the machine (computer) such as memory management, etc. Thus, you can focus on programming instead of worrying about the little details many consider both tedious and difficult. Java is very stubborn and verbose, which means you need to write a lot of code trying to convince the language to build some feature. Thus, you may need to spend a lot of time coding before you can get a working app. This may be demotivating for coding beginners.")
    }


    $(".pre-hidden").hide().fadeIn(3000);
    window.scrollTo(0,document.body.scrollHeight);
    event.preventDefault();
  });

  $("#resetButton").click(function() {
    $("input").attr("disabled", false);
    $("span").text("");
    $(".pre-hidden").show().fadeOut();
    resetForms();
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

  function resetForms() {
    for (i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
    }
  }

});
