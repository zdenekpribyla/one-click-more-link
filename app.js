$(document).ready(function () {

	$("#my-button").click(function () {

		$.get('data.json', function (data) {
			data.forEach(function (singleLink) {
				var singleIdLink = singleLink.idLink
				var getClassName = $('#my-button').attr('class');
				if (getClassName == singleIdLink) {
					alert("bingo, je to " + getClassName)
				};
			});

		});

	});
});




