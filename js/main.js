;
(function ($) {

	// Sticky Footer
	var bumpIt = function() {
		$('body').css('padding-bottom', $('.footer').outerHeight(true));
		$('.footer').addClass('sticky-footer');
	},
	didResize = false;

	$(window).resize(function() {
		didResize = true;
	});
	setInterval(function() {
		if(didResize) {
			didResize = false;
			bumpIt();
		}
	}, 250);

	$(document).ready(function () {
		// Sticky footer
		bumpIt();

		$('.matchHeight').matchHeight();


		$('.go_top').click(function(){
			var el = $(this).attr('href');
			$('body').animate({
				scrollTop: $(el).offset().top}, 1500);
			return false;
		});

		$('.hamburger_icon .icon').click(function(){
			$(this).toggleClass('icon_opnd');
			$('.header__menu').slideToggle(300);
		});


		$('.banner_slider').slick({
			// cssEase: 'ease',
			// fade: true,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.slide',
		});


		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			prevArrow: '.castom_arrow-prev',
			nextArrow: '.castom_arrow-next',
			responsive:[
			{
				breakpoint:550,
				settings:{
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '.castom_arrow-prev',
					nextArrow: '.castom_arrow-next'
				}
			}
			]
		});

		$('.slider-leaders').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '.castom_leaders-prev',
			nextArrow: '.castom_leaders-next',
			responsive:[
			{
				breakpoint:768,
				settings:{
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
					prevArrow: '.castom_leaders-prev',
					nextArrow: '.castom_leaders-next'
				}
			},
			{
				breakpoint:500,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '.castom_leaders-prev',
					nextArrow: '.castom_leaders-next'
				}
			}
			]
		});


		var qtyField = $('.counts'),
		qtyUp = $('.more'),
		qtyDown = $('.less');
		qtyUp.on('click',function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(++oldVal);
		});

		qtyDown.on('click',function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			if (oldVal != 1){
				qtyField.val(--oldVal);
			}
		});

		qtyField.on("change", function(){
			if(qtyField.val() < 1){
				qtyField.val(1)
			}
		});

		/*hover on stars*/

		$( '.two_stars' ).hover(function() {
			$( '.one_star' ).addClass( "active" );
		}, function() {
			$( '.one_star' ).removeClass( "active" );
		}
		);

		$( '.three_stars' ).hover(function() {
			$( '.one_star' ).addClass( "active" );
			$( '.two_stars' ).addClass( "active" );
		}, function() {
			$( '.one_star' ).removeClass( "active" );
			$( '.two_stars' ).removeClass( "active" );
		}
		);

		$( '.four_stars' ).hover(function() {
			$( '.one_star' ).addClass( "active" );
			$( '.two_stars' ).addClass( "active" );
			$( '.three_stars' ).addClass( "active" );
		}, function() {
			$( '.one_star' ).removeClass( "active" );
			$( '.two_stars' ).removeClass( "active" );
			$( '.three_stars' ).removeClass( "active" );
		}
		);

		$( '.five_stars' ).hover(function() {
			$( '.one_star' ).addClass( "active" );
			$( '.two_stars' ).addClass( "active" );
			$( '.three_stars' ).addClass( "active" );
			$( '.four_stars' ).addClass( "active" );
		}, function() {
			$( '.one_star' ).removeClass( "active" );
			$( '.two_stars' ).removeClass( "active" );
			$( '.three_stars' ).removeClass( "active" );
			$( '.four_stars' ).removeClass( "active" );
		}
		);

		$('.one_star').click(function(){
			$('.stars ul li').removeClass('clicked');
			$(this).addClass('clicked');
		});

		$('.two_stars').click(function(){
			$('.stars ul li').removeClass('clicked');
			$(this).addClass('clicked');
			$( '.one_star' ).addClass( "clicked" );
		});

		$('.three_stars').click(function(){
			$('.stars ul li').removeClass('clicked');
			$(this).addClass('clicked');
			$( '.one_star' ).addClass( "clicked" );
			$( '.two_stars' ).addClass( "clicked" );
		});

		$('.four_stars').click(function(){
			$('.stars ul li').removeClass('clicked');
			$(this).addClass('clicked');
			$( '.one_star' ).addClass( "clicked" );
			$( '.two_stars' ).addClass( "clicked" );
			$( '.three_stars' ).addClass( "clicked" );
		});

		$('.five_stars').click(function(){
			$('.stars ul li').removeClass('clicked');
			$(this).addClass('clicked');
			$( '.one_star' ).addClass( "clicked" );
			$( '.two_stars' ).addClass( "clicked" );
			$( '.three_stars' ).addClass( "clicked" );
			$( '.four_stars' ).addClass( "clicked" );
		});



	});

$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
		$('.go_top').addClass('visible');
	}
	else{
		$('.go_top').removeClass('visible');
	}
});


}(jQuery));
