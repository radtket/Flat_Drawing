//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mousedown = false;



//When clicking on control list items
$(".controls").on( "click", "li", function() {
	//Deselect sibling elements
	$(this).siblings().removeClass('selected');
	//Select clicked element
	$(this).addClass('selected');
	//cache current color
	color = $(this).css("background-color"); 
});

  
//When "New Color" is pressed

$("#revealColorSelect").click( function() {
	changeColor();
	$("#colorSelect").toggle();
});




function changeColor() {
	var $red = $("#red").val();
	var $green = $("#green").val();
	var $blue = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + $red + "," + $green + "," + $blue + ")");

}
  //Show color select or hide the color select

//update the new color span

$("input[type=range]").change(changeColor);

//When color sliders change

//When "Add Color" is pressed

$('#addNewColor').click(function() {
	var $newColor = $("<li></li>");
	$newColor.css( "background-color", $("#newColor").css("background-color") );
	$(".controls ul").append($newColor);
	$newColor.click();
		/* Act on the event */
});

  //Append the color to the controls ul

  //Select the new color


//On mouse events on the canvas
$canvas.mousedown(function(e) {
	lastEvent = e;
	mousedown = true;
}).mousemove(function(e) {

	if(mousedown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function() {
	mousedown = false;

}).mouseleave(function() {
	$canvas.mouseup();
});



  







