$(function(){
	//youtube background
	$('#main').tubular({
		videoId: 'CYXG9rG0Jf0',
		mute: false,
		start:30
	})
	.on('ready',function(){
		init();
		$('#tubular-container').css('opacity',1);
	}); 
	setTimeout(init,5000); //use image instead

	//sanga effects
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

	//goto btns
	$('#next_btn').on('click',function(){
		$('html,body').animate({
            scrollTop: $('#gift').offset().top
        }, 800, "easeInOutExpo");
	});
	$('.msg-btn').click(function(){
		var to = $(this).attr('data-value');
		console.log(to);
		$('html,body').animate({
            scrollTop: $('#'+to).offset().top
        }, 800, "easeInOutExpo");
	})

	//wrap msg onload
	wrap_msg();
	$(window).resize(wrap_msg);
});

var inited = false;
function init(){
	if(inited){
		return true;
	}
	inited = true;
	var $mask = $('#fixed-mask');
	$mask.animate({
		height:0,
	},800,'easeInOutExpo',function(){
		$mask.hide();
		$('.main-content h1').addClass('active');
		setTimeout(function(){$('.main-content #next_btn').addClass('active');},500);
	});
}

function wrap_msg(){
	var vh = $(window).height();
	$('.msg').each(function(i,block){
		var $block = $(block);
		var bh = $block.height();
		if( bh < vh){
			offset = (vh - bh) / 2;
			$block.css('padding',offset+'px 0px');
		}
	});
}

function randomIntFromInterval(min,max){
    return Math.random()*(max-min+1)+min;
}