$(document).ready(function() {
  $("#button").click(function(e) {
    let text = $(".text").val();
    $(text).css({ color: "red" });
  });
});
