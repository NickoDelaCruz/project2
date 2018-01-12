$(document).ready(function() {
  $("form#q1").submit(function(event) {
    var starter = $("input:radio[name=start]:checked").val();

  if (starter==="startups") {
    $('#Ruby').fadeToggle();
    $('#Water').hide();
    $('#Grass').hide();
  } else if (starter==="Bulbasaur") {
    $('#Grass').fadeToggle();
    $('#Water').hide();
    $('#Fire').hide();
  }
    else if (starter==="Squirtle") {
      $('#Water').fadeToggle();
      $('#Grass').hide();
      $('#Fire').hide();
    }
    event.preventDefault();
  });
});
