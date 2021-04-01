// Инициализируем Swipe

var swiper = new Swiper('.image-slider', {
  	// Default parameters
  	slidesPerView: 1,
  	spaceBetween: 10,
 	loop: true,
  	autoplay: true,
	effect: 'coverflow',
	grabCursor: true,
	// centeredSlides: true,
	coverflowEffect:{
		rotate: 20,
		stretch: 50,
		slideShadows: true
	},
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
  	// Responsive breakpoints
  	breakpoints: {
	   // when window width is >= 320px
	   320: {
	      slidesPerView: 3,
	      spaceBetween: -250
	   },
	   // when window width is >= 480px
	   480: {
	      slidesPerView: 3,
	      spaceBetween: -150
	   },
	   // when window width is >= 640px
	   640: {
	      slidesPerView: 3,
	      spaceBetween: -80
	   }
  	}
})