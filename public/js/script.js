function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getQuestion () {
	$('li').removeClass('active');
	questions = new Array();
	$.get('/public/js/question.txt', function(data) {
		questions = data.split('\n');
		el = questions[getRandom(0, questions.length - 1)].split('~');
		question = el[0];
		answers = el.slice(1);
		$('.b-question h3').text(question.replaceAll('"', ''));
		answers = answers.sort(function(){
			return Math.random() - 0.5;
		});
		for (i = 0; i < answers.length; i++) {
			if (answers[i].indexOf('<>') !== -1) {
				$('.b-answers .li-' + i).addClass('active');
			}
			$('.b-answers .li-' + i).text(answers[i].replaceAll('"', '').replace('<>', ''));
		}
	});
}

$(document).ready(function () {

	// respons = prompt('Пароль:');
	// if (respons == '0420zxc0420') {
		$('body').css({
			'display': 'block',
		})
		getQuestion();
		$('body').on('click', '.b-answers li.active', function () {
			getQuestion();
		})
	// }
	// else {
	// 	window.location.reload();
	// }

})