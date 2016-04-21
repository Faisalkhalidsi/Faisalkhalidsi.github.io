$(document).ready(function(){
  $(".kliks").click(function(){
     $("#dialog").show("100");
  });
});

function dialogclose() {
    $("#dialog").hide("100");
}