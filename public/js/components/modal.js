$(document).ready(function() {
	$("[data-modal]").on('click', function(e) {
		e.preventDefault();
		var target = $(this).data('modal');
		$("#"+target).addClass("is-open");
		$("body").addClass("overflow-hidden");

		alert("test");
	});

	function closeModal() {
		$(".modal-container").removeClass("is-open");
		$("body").removeClass("overflow-hidden");
	}

	$(".new-modal-close").on('click', function() {
		closeModal();
	});

	$(".modal").on('click', function(e) {
		e.stopPropagation();
	});

	$(".modal-container").on('click', function() {
		$(".modal-container").removeClass("is-open");
		$("body").removeClass("overflow-hidden");
	});
});