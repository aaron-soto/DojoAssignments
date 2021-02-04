$(document).ready(function () {
  $("img").click(function () {
    let $animal = $(this).attr("animal");
    let $seriesNum = $(this).attr("series-num");
    if ($animal === "cat") {
      $(this).attr("src", `assets/img/ninja${$seriesNum}.png`);
      $(this).attr("animal", "ninja");
    } else if ($animal === "ninja") {
      $(this).attr("src", `assets/img/cat${$seriesNum}.png`);
      $(this).attr("animal", "cat");
    }
  });
});
