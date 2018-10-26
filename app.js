$(document).ready(function () {

	$("button").click(function () {

		$.get('data.json', function (data) {

			data.forEach(function (singleLink) {
				window.open(singleLink.urlLink, "_blank",)
			});

		});
			
	});

});