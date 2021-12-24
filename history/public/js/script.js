$(document).ready(function () {

	$('body').css({
		'display': 'block',
	})

	questions = [];
	$.ajax({
		url: "/history/public/js/question.txt",
		async: false,
		cache: false,
		dataType: "text",
		success: function(data) {
			$('.jumbotron').html(data);

			var filter = $('.form-control').val(), count = 0;

			$(".jumbotron p").each(function() {
				if ($(this).text().search(new RegExp(filter, "i")) < 0) {
					$(this).css('display', 'none');
				} else {
					$(this).css('display', 'block');
					count++;
				}
			});
		}
	});


	$('.form-group input').on('input', function () {
		v = $(this).val();
		if (v != '') {
			$(this).next().css({
				'top': '-50%',
			})
		}
		else {
			$(this).next().css({
				'top': '50%',
			})
		}
		var filter = $(this).val(), count = 0;

		$(".jumbotron p").each(function() {

			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).css('display', 'none');
			} else {
				$(this).css('display', 'block');
				count++;
			}
		});

	})

})