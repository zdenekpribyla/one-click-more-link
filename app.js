$(document).ready(function () {
	$.get('data.json', function (items) {
		items.forEach(function (item) {
			var singleLinkId = item.linkId
			var classNameOfClickElement = $('#my-button').attr('class');
			if (classNameOfClickElement === singleLinkId) {
				item.linkUrl.forEach(function (singleLinkUrl) {
					$("#my-button").click(function () {
						window.open(singleLinkUrl);
						console.log(singleLinkUrl)
					});
				});
			};
		});

	});

	
});




