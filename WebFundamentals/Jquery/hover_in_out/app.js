$(document).ready(function () {
  $("img").hover(
    function () {
      $(this).attr("src", "assets/images/doggo.jpg");
    },
    function () {
      $(this).attr("src", "assets/images/codingdojo.jpeg");
    }
  );
});
