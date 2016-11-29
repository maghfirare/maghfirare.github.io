$(function(){
	var owl = $('#owlCarousel');

	owl.owlCarousel({
		lazyLoad: true,
		responsiveClass: true,
		autowidth: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
				margin: 20
			}
		}
	});

	$('#owlCarouselLeft').click(function(){
		owl.trigger('prev.owl.carousel')
	});

	$('#owlCarouselRight').click(function(){
		owl.trigger('next.owl.carousel')
	});

	// Smooth Scroll Anchor
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
		});
	});
});