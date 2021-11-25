$(document).ready(function () {

	$('body').css({
		'display': 'block',
	})

	$('li').removeClass('active');

	count = 1;
	correct = 0;
	questions_obj = {};

	$.get('/public/js/question.txt', function(data) {
		all = data.split('\n');
		questions = all.sort(() => 0.5 - Math.random()).slice(0, 25);
		for (i = 1; i <= questions.length; i++) {
			el = questions[i - 1].split('~');
			// console.log(el);
			// console.log(el[5]);
			$('.blocks').append($('<div>', {
				'class': 'block block-' + i,
				'text': el[0].replaceAll('"', ''),
			})
			.prepend($('<pre>', {
				'text': 'Вопрос: ' + i
			}))
			.append($('<div>', {
				'class': 'b-question',
			})
			.append($('<h3>')))
			.append($('<ul>', {
				'class': 'b-answers',
			})
			.append(function () {
				html = '';
				answers = el.slice(1);
				answers = answers.sort(() => 0.5 - Math.random());
				for (j = 0; j < 5; j++) {
					if (answers[j].indexOf('<>') !== -1) {
						html += '<li class="li-' + j + 1 + ' active">' + answers[j].replaceAll('"', '').replace('<>', '') + '</li>'
					}
					else {
						html += '<li class="li-' + j + 1 + '">' + answers[j].replaceAll('"', '').replace('<>', '') + '</li>'
					}
				}
				return html;
			})))
		}
	});

	$('body').on('click', '.b-answers li', function () {
		if (count < 25) {
			count += 1;
		}

		$('.pre-1').text('Вопрос: ' + count);
		$(this).closest('.block').css({
			'display': 'none',
		})
		$('.block-' + count).css({
			'display': 'block',
		})

		if ($(this).hasClass('active')) {
			$(this).addClass('true');
			correct += 1;
			$('.pre-2').text('Правильных: ' + correct);
		}
		else {
			$(this).addClass('false');
		}
	})

	$('body').on('click', '.block-25 li', function () {
		$('.block').css({
			'display': 'block',
			'pointer-events': 'none',
		})
		$('li.active').addClass('true');
		$('body').css({
			'overflow-y': 'scroll',
		})
	})

		setInterval(function () {
		if ($('input').prop('checked')) {
			$('li.active').addClass('on')
		}
		else {
			$('li.active').removeClass('on')
		}
	})

})