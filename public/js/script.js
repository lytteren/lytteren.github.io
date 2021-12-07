$(document).ready(function () {

	$('body').css({
		'display': 'block',
	})

	questions = [];
	$.ajax({
		url: "/public/js/question.txt",
		async: false,
		cache: false,
		dataType: "text",
		success: function(data) {
			data = data.split("\n");
			$('.jumbotron').html(data);
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

		$(".jumbotron p").each(function(){

			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).css('display', 'none');
			} else {
				$(this).css('display', 'block');
				count++;
			}
		});

	})

})