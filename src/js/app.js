import $ from "jquery";

// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes appropriately

let color = $(".selected").css("background-color");
const context = $("canvas")[0].getContext("2d");
const $canvas = $("canvas");
let lastEvent;
let mousedown = false;

// When clicking on control list items
// eslint-disable-next-line func-names
$(".controls").on("click", "li", function() {
	// Deselect sibling elements
	$(this)
		.siblings()
		.removeClass("selected");
	// Select clicked element
	$(this).addClass("selected");
	// cache current color
	color = $(this).css("background-color");
});

function changeColor() {
	const $red = $("#red").val();
	const $green = $("#green").val();
	const $blue = $("#blue").val();
	$("#newColor").css("background-color", `rgb(${$red},${$green},${$blue})`);
}
// Show color select or hide the color select

// update the new color span

$("input[type=range]").change(changeColor);

// When color sliders change

// When "Add Color" is pressed

$("#addNewColor").click(() => {
	const $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	$newColor.click();
	/* Act on the event */
});

// When "New Color" is pressed

$("#revealColorSelect").click(() => {
	changeColor();
	$("#colorSelect").toggle();
});

// Append the color to the controls ul

// Select the new color

// On mouse events on the canvas
$canvas
	.mousedown(e => {
		lastEvent = e;
		mousedown = true;
	})
	.mousemove(e => {
		if (mousedown) {
			context.beginPath();
			context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = color;
			context.stroke();
			lastEvent = e;
		}
	})
	.mouseup(() => {
		mousedown = false;
	})
	.mouseleave(() => {
		$canvas.mouseup();
	});
