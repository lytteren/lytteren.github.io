$(document).ready(function () {

	$('body').css({
		'display': 'block',
	})

	images = 'public/img/';
	rotates = ['rotate(-30deg)', 'rotate(30deg)', 'rotate(-15deg)', 'rotate(15deg)', 'rotate(-20deg)', 'rotate(20deg)'];

	for (i = 0; i < 13; i++) {
		for (j = 1; j <= 26; j++) {
			// $('.sketchbook').append($('<img>', {
			// 	'src': images + j + '.png',
			// 	'width': '10%',
			// }))
			thisR = rotates.sort(() => 0.5 - Math.random());
			$('.sketchbook').append('<img src="' + images + j + '.png" width="12%" style="transform: ' + thisR[0] + '">\n');
		}
	}

	elements = $('.sketchbook').html().split('\n').slice(1, -1);
	elements = elements.sort(() => 0.5 - Math.random());
	$('.sketchbook').html(elements);

})