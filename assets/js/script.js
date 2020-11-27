/* Sliding Carousel from https://github.com/sachinchoolur/lightslider
autoWidth changed from '#autoWidth' to '.autoWidth', I needed to use the carousel more than once*/
$(document).ready(function () {
	$('.autoWidth').lightSlider({
		autoWidth: true,
		loop: true,
		onSliderLoad: function () {
			$('.autoWidth').removeClass('cS-hidden');
		}
	});
});

//Code from W3School:  https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

