// Ful screen
$(window).resize(function (event) {
	mainblock();
});
function mainblock() {
	var h = $(window).outerHeight();
	$('.mainblock').css('min-height', h);
}
mainblock();

//=====================================================================

// Клик по иконке поиска
let form_button = document.querySelector('.header-action__button');
form_button.addEventListener("click", function (e) {
	let form_search = document.querySelector('.header-action__input');
	form_search.classList.toggle('active');

});

//-----------

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header-action__form')) {
		let form_search = document.querySelector('.header-action__input');
		form_search.classList.remove('active');
	}
});

//=====================================================================
// Меню бургер
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//=====================================================================

// Адаптив картинки
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//=====================================================================

// Slick slider
$(document).ready(function () {
	$('.bestsellers-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 300,
		easing: 'ease',
		// адаптив
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});
});

//==================================

$(document).ready(function () {
	$('.slider-rewiews').slick({
		arrows: false,
		dots: true,
		//adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		easing: 'ease',
	});
});

