$(document).ready(function () {

	$('body').css({
		'display': 'block',
	})

	questions = [];
	$('select[name="obj"]').on('change', function () {
		tag = $(this).val();
		$.ajax({
			url: "/public/js/question.txt",
			async: false,
			cache: false,
			dataType: "text",
			success: function(data) {
				data = data.split(tag);
				
				$('.jumbotron').html(data[1]);

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
	})

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