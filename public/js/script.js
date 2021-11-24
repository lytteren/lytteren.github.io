function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function nextQuestion (count, questions, correct) {
	try {
		el = questions[count].split('~');
		question = el[0];
		answers = el.slice(1);
		$('.b-question h3').text(question.replaceAll('"', ''));
		answers = answers.sort(() => 0.5 - Math.random());
		for (i = 0; i < answers.length; i++) {
			if (answers[i].indexOf('<>') !== -1) {
				$('.b-answers .li-' + i).addClass('active on');
			}
			$('.b-answers .li-' + i).text(answers[i].replaceAll('"', '').replace('<>', ''));
		}
	}
	catch (err) {
		console.log('End');
		// alert('Правильных: ' + correct)
	}
}

$(document).ready(function () {

	// respons = prompt('Пароль:');
	// if (respons == '0420zxc0420') {
		$('body').css({
			'display': 'block',
		})

		$('li').removeClass('active');

		count = 1;
		correct = 0;

		$.get('/public/js/question.txt', function(data) {
			questions = data.split('\n');
			shuffled_questions = questions.sort(() => 0.5 - Math.random());
			selected_questions = shuffled_questions.slice(0, 26);
			nextQuestion(count, selected_questions);
			$('body').on('click', '.b-answers li', function () {
				if ($(this).hasClass('active')) {
					correct += 1;
					$('.code-2').text('Правильных: ' + correct);
				}
				$('li').removeClass('active');
				if (count !== 25) {
					count += 1;
					nextQuestion(count, selected_questions, correct);
				}
				$('.code-1').text('Вопрос: ' + count);
			})
		});

		setInterval(function () {
			if ($('input').prop('checked')) {
				$('li.active').addClass('on')
			}
			else {
				$('li.active').removeClass('on')
			}
		})


	// }
	// else {
	// 	window.location.reload();
	// }

})