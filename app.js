$(document).ready(function () {

	$("#my-button").click(function () {

		$.get('data.json', function (items) {
			items.forEach(function (item) {
				var singleLinkId = item.linkId
				var classNameOfClickElement = $('#my-button').attr('class');
				if (classNameOfClickElement === singleLinkId) {
					item.linkUrl.forEach(function (singleLinkUrl) {
						window.open(singleLinkUrl);
					});
				};
			});

		});

	});
});




