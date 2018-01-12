$(document).ready(function() {
  $("form#q1").submit(function(event) {
    var starter = $("input:radio[name=start]:checked").val();

  if (starter==="startups") {
    $('#Ruby').fadeToggle();
    $('#Csharp').hide();
    $('#GJava').hide();
  } else if (starter==="enterprise") {
    $('#Csharp').fadeToggle();
    $('#Ruby').hide();
    $('#Java').hide();
  }
    else if (starter==="established") {
      $('#Java').fadeToggle();
      $('#Csharp').hide();
      $('#Ruby').hide();
    }
    event.preventDefault();
  });
});
