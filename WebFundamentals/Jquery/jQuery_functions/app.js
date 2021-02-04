$(document).ready(function () {
  $("#addClass").click(function () {
    $(".add-class-text").css("background-color", "red");
  });
  $("#hide-btn").click(function () {
    $(".hide-text").hide();
  });

  $(".show-text").hide();
  $("#show-btn").click(function () {
    $(".show-text").show();
  });

  $("#toggle-btn").click(function () {
    $(".toggle-text").toggle();
  });

  $(".slide-down-text").hide();
  $("#slide-down-btn").click(function () {
    $(".slide-down-text").slideDown();
  });

  $("#slide-up-btn").click(function () {
    $(".slide-up-text").slideUp();
  });

  $("#slide-toggle-btn").click(function () {
    $(".slide-toggle-text").slideToggle();
  });

  $(".fade-in-text").hide();
  $("#fade-in-btn").click(function () {
    $(".fade-in-text").fadeIn();
  });

  $("#fade-out-btn").click(function () {
    $(".fade-out-text").fadeOut();
  });

  $("#before-btn").click(function () {
    $(".before-text").before("<p>Before</p>");
  });

  $("#after-btn").click(function () {
    $(".after-text").after("<p>After</p>");
  });

  $("#append-btn").click(function () {
    $(".append-text").append("<span>Appended</span>");
  });

  $("#html-btn").click(function () {
    $(".html-text").html(`<button class="btn btn-success">.html</button>`);
  });

  $("#attr-btn").click(function () {
    $(".attr-link").attr("href", "https://www.codingdojo.com/");
  });

  $("#car-span").text($("#cars").val());
});
