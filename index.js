var reset = false;
var div = false;
var section = false;
var cache = "";
var border_color = "";
var pos_pointeur = false;
var pos_click = false;


$('nav').hide();


$('#close').click( function (event) {
  $('nav').hide();
  $('#open').show();
  
})

$("#open").click(function (event) {
  console.log('click');
  event.preventDefault();
  $('nav').show();
  $('#open').hide();
})


$("#position").click( function(event) {
  event.preventDefault;
  console.log($('#mouse-pos').length <= 1)
  if ($('#mouse-pos').length < 1) {
    $("#mouse-parent").append(
      $(document.createElement("span")).attr({id: "mouse-pos"}));
    }
  $('body').mousemove(function (e) { 
    const x = e.pageX;
    const y = e.pageY;
  $('#mouse-pos').text("pos-x: " + x.toString() + " " + "pos-y: " + y.toString());
  $("#mouse-pos").css('border-bottom', '1px solid black');
  $("#mouse-pos").css('line-height', '1vw');
  });
})

$("#hide").click( function(event) {
  $("#mouse-pos").remove();
})

$('#css_reset').click(function(e){
    e.preventDefault();
    if (!reset) {
        $('#screen').remove();
        $('#css_reset').html('restaurer_css');
        $("head").append(
      $(document.createElement("link")).attr({id: "reset", rel:"stylesheet", type:"text/css", href:"css_reset"})
    );
    reset = true;
    } else {
        $("#reset").remove();
        $('#css_reset').html('css_reset');
        $("head").append(
            $(document.createElement("link")).attr({id: "screen", rel:"stylesheet", type:"text/css", href:"style_desk.css"})
          );
        reset = false;
    }
  });
  /* FREDERIC GRUWE 2022 */
  $('#border-select').change((event) => {
    event.preventDefault();
    $(`${cache}`).css('border', 'None');
    switch(event.target.value){
      case 'div':
        border_color = 'red';
        break;
      case 'section':
        border_color = 'blue';
        break;
      case 'p':
        border_color = 'green';
        break;
      default:
        border_color = '';
    }
    $(`${event.target.value}`).css('border', '0.2vw solid' + ' ' + border_color);
    cache = event.target.value;
  })
