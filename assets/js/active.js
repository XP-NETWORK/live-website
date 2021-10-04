$(document).ready(function(){


	jQuery(".have_drop_menu").click(function(){
		jQuery(this).toggleClass("active").siblings().removeClass("active");
	});

	jQuery(".languageSelect> a").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
	});

	jQuery(".menu_triger").click(function(){
		jQuery(this).toggleClass("active");
	});

	jQuery(".menu_triger").click(function(){
		jQuery(".menu_boxes").toggleClass("active");
	});


	// jQuery(".filterTriger").click(function(){
	// 	jQuery(".search_side").addClass("active");
	// });



});