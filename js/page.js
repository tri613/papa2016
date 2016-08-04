$(function(){
	$('#main').tubular({
		videoId: 'CYXG9rG0Jf0',
		mute: true,
		start:30
	})
	.on('ready',function(){
		var $mask = $('#main .mask');
		$mask.animate({
			height:0,
		},800,'easeInOutExpo',function(){
			$mask.hide();
			$('#main-content h1').addClass('active');
			setTimeout(function(){$('#main-content #next_btn').addClass('active');},500);
		});
	}); 

	$('.sanga').each(function(i,v){
		var color = $(this).attr('data-color');
		var top = $(this).attr('data-top');
		var left = $(this).attr('data-left');
		$(this).css({
			'animation-duration': randomIntFromInterval(3,5) +'s',
			'background':color,
			'top':top+'%',
			'left':-left+'px'
		});
	})
	$('.msg-btn').hover(function(e){
		$(this).find('.sanga').each(function(i,v){
			var color = $(this).attr('data-hover');
			var top = $(this).attr('data-top')-30+'%';
			$(this).css('background',color);
			$(this).css('top',top);
		});
	},function(e){
		$(this).find('.sanga').each(function(i,v){
			var color = $(this).attr('data-color');
			var top = $(this).attr('data-top');
			$(this).css('background',color);
			$(this).css('top',top+'%');
		});
	});


	$('#next_btn').on('click',function(){
		$('html,body').animate({
            scrollTop: $('#gift').offset().top
        }, 800, "easeInOutExpo");
	});
});

function randomIntFromInterval(min,max){
    return Math.random()*(max-min+1)+min;
}