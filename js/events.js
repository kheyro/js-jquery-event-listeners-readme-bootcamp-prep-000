//define functions here
function getIt() {
  $('p').on("click", function() {
    alert('Hey!');
  })
}

function frameIt() {
  $(window).on("load", function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on("keydown", function(e) {
    if(e.which == ) {
      alert("G");
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();

});
