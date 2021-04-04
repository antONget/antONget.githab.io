$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
});

/*// Инициализируем Swipe

var swiper = new Swiper('.image-slider', {
	slidesPerView: 3,
	slidesPerColumn: 1,
	slidesPerColumnFill:"row",
	spaceBetween: 30,
	autoplay: true,
	effect: 'coverflow',
	coverflowEffect:{
		rotate: 20,
		stretch: 50,
		slideShadows: true,
	},
	centerSlides: true,
	loop: true,
	preloadImages: false,
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
});*/

//- Using a function pointer:
// document.getElementById("clickMe").onclick = Start;


function Start() {
	var weight = document.getElementById('weight').value; //выцепляем значение value первого вводимого поля
	var height = document.getElementById('height').value; //выцепляем значение value множителя из списка
	var age = document.getElementById('age').value;
	var male = document.getElementsByName('r_male'); //определяем какой из пунктов выбран и запоминаем его value в переменную radio
	for (var i = 0; i < male.length; i++) {
		if (male[i].type == "radio" && male[i].checked) {
		 	var gender = parseInt ( male[i].value );
		}
	}
	var t = document.getElementsByName('r_type');
	for (var i = 0; i < t.length; i++) {
		if (t[i].type == "radio" && t[i].checked) {
			var telo = parseInt (t[i].value);
		}
	}
	var n = document.getElementById('select_activity').options.selectedIndex;
	var activity = document.getElementById("select_activity").options[n].value;
	var BOV = Math.round(10*weight + 6.25*height - 5*age + gender);
	var cal_day = Math.round((BOV + telo) * activity);
	var B = Math.round(2*weight);
	var Z = Math.round(weight);
	var U = Math.round((cal_day - B*4 - Z*9) / 4);

	document.getElementById('result_BOV').innerHTML = BOV; //выводим получившееся значение в div с id="result"
	document.getElementById('result_day').innerHTML = cal_day; //выводим получившееся значение в div с id="result"
	document.getElementById('result_B').innerHTML = B;
	document.getElementById('result_Z').innerHTML = Z;
	document.getElementById('result_U').innerHTML = U;
};