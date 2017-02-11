$(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
	});
	$('.headerp p').hover(function() {
		var a = $(this).index();
		$(".headerul li").eq(a).show().siblings().hide();
	}, function() {
		$(".headerul li").hide();
	})
})