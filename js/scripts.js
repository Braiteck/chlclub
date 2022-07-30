$(function(){
	// Отзывы
	$('.reviews .slider').owlCarousel({
		loop: true,
	    nav: true,
	    dots: false,
	    navSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    margin: 80,
	    items : 1,
	})


	// Подарочный сертификат
	$('.about_cert .slider').owlCarousel({
		loop: true,
	    nav: true,
	    dots: false,
	    navSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    margin: 0,
	    items : 1,
	})


	// Ваши фотографии
	$('.gallery_block .slider').owlCarousel({
		loop: true,
	    nav: true,
	    dots: false,
	    navSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    margin: 0,
	    items : 1,
	    autoplay: true,
		autoplayTimeout: 5000
	})


	// FAQ
	$('.faq .question').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp()
		} else {
			$('.faq .question').removeClass('active')
			$('.faq .answer').slideUp()

			$(this).addClass('active').next().slideDown()
		}
	})


	// Кнопка 'Вверх'
	$('.buttonUp a').click(function(e) {
		e.preventDefault()

		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800)
	})


	// Календарь
	$('.booking .datepicker-here').datepicker({
		inline: true,
		prevHtml: '<div class="prev"></div>',
		nextHtml: '<div class="next"></div>',
		navTitles: {
		    days: 'MM yyyy',
		    months: 'yyyy',
		    years: 'yyyy1 - yyyy2'
		}
	})


	// Маска ввода телефона
	$('input[type=tel]').mask('+7 (999) 999 - 99 - 99')


	//Изменение количества товара
	$('.amount .minus').click(function(e){
	    e.preventDefault()

	    var input = $(this).parents('.amount').find('input')
	    var inputVal = parseInt(input.val())
	    var minimum = parseInt(input.attr('data-minimum'))

	    if(inputVal > minimum){
	    	input.val(inputVal-1)
	    }
	})

	$('.amount .plus').click(function(e){
	    e.preventDefault()

	    var input = $(this).parents('.amount').find('input')
	    var inputVal = parseInt(input.val())
	    var maximum = parseInt(input.attr('data-maximum'))

	    if(inputVal < maximum){
	    	input.val(inputVal-(-1))
	    }
	})


	// Моб. меню
	$('header .mob_menu_link').toggle(function(){
		$(this).addClass('active')
		$('header nav').fadeIn()
	}, function(){
		$(this).removeClass('active')
		$('header nav').fadeOut()
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		transitionEffect : 'slide',
		animationEffect : 'fade',
		i18n : {
			'en' : {
				CLOSE : 'Закрыть'
			}
		}
	})


	// Табы
	$('.tabs_container').each(function(){
	    $(this).find('.tab_content:first').show()
	})

	$('.tabs li').click(function() {
	    var parentBox = $(this).parents('.tabs_container')

	    $(parentBox).find('.tabs li').removeClass('active')
	    $(this).addClass('active')
	    $(parentBox).find('.tab_content').hide()

	    var activeTab = $(this).find('a').attr('href')
	    $(activeTab).fadeIn()
	    return false
	})
})


$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(this).scrollTop() > $(window).innerHeight() ){
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}
})