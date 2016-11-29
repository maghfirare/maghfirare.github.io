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
});