$('#wrap-header header i').click(function(){
	
	if ($('#main-dropdown').css('display', 'none')){
		
		$('#main-dropdown').slideDown({
			duration: 400,
			easing: 'easeOutBack'
		}).css('display', 'block');
		
	} else {
		
		$('#main-dropdown').slideUp({
			duration: 400,
			easing: 'easeOutBack'
		});
	};

});


var footerButtons = ['foot-btn-twitter', 'foot-btn-fb', 'foot-btn-gplus'];

$.each(footerButtons, function(i, val){

	var socialButton = $('#' + val);
	var socialShare = $('.' + val);

	socialButton.click(function(){
		
		if (socialShare.css('display', 'none')){

			$('#foot-share li').hide("slide", {
				direction: "down",
				duration: 200
			});

			socialShare.delay(100).show('slide', {
				direction: 'down',
				duration: 300
			});
			
		} else if (socialShare.css('display') !== 'none'){
			
			socialShare.hide('slide', {
				direction: 'down',
				duration: 250
			});
		
		}

	});

});
