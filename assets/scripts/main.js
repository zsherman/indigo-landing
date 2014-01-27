/*global $:false */

$(document).foundation();

$(document).ready(function () {

  $('.signup').click(function(e) {
    $(this).stop().animate({width: "50%"}, 300);
    $(this).attr("placeholder", "example@gmail.com");
  });

  $(document).click(function (e) {
    var container = $(".signup");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.stop().animate({width: "146px"}, 300);
        container.attr("placeholder", "Get Notified");
    }
  });


});