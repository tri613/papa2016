$(function(){
	$('#main').tubular({
		videoId: 'CYXG9rG0Jf0',
		mute: false,
		start:30
	})
	.on('ready',function(){
		var $mask = $('.mask');
		$mask.animate({
			height:0,
		},800,'easeOutQuad',function(){
			$mask.hide();
			$('#main-content h1').addClass('active');
			setTimeout(function(){$('#main-content #next_btn').addClass('active');},500);
		});
	}); 


	$('#next_btn').on('click',function(){
		console.log('go to');
		$('html,body').animate({
            scrollTop: $('#gift').offset().top
        }, 800, "easeInOutExpo");
	});
});