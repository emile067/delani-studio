$(document).ready(function() {
  $("div.wwd1").click(function() {
    $(".des-show").toggle();
    $(".des-hide").toggle();
  });
  $("div.wwd2").click(function() {
    $(".dev-show").toggle();
    $(".dev-hide").toggle();
  });
  $("div.wwd3").click(function() {
    $(".prod-show").toggle();
    $(".prod-hide").toggle();
  });
});