$(document).ready(function () {
  $(".img-col").click(function () {
    $(this).fadeOut();
  });
  $("#restore-btn").click(function () {
    $(".img-col").fadeIn();
  });
});
