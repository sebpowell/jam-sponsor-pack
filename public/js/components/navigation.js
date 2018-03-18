$(document).ready(function() {
	$(".navigation a").on("click", function() {

		$(this).siblings().removeClass("is-active");
		$(this).addClass("is-active");
	});
});